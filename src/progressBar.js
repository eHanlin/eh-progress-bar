(function( document ){

  'use strict';

  /*
   * @function
   * @param {String} tag
   * @return DOMElement
   */
  var createElement = function( tag ){
    return document.createElement( tag );
  };

  /*
   * @function
   * @return DOMElement
   */
  var createDocFragment = function(){
    return document.createDocumentFragment();
  }

  /*
   * @function
   * @param {DOMElement} dom
   */
  var clearDOMElement = function( dom ){

    var children = dom.children;
    for ( var i = 0 ; i < children.length; i++ ) {
      dom.removeChild( children[i] );
    }
  };

  /**
   * @class
   *
   */
  var ProgressBar = function(){
    this.init_();
  };

  ProgressBar.prototype = {
    /**
     * @private
     */
    init_:function(){
      this.dom_ = createElement( 'div' );
      this.dom_.className = "progress-bar";
    },
    /**
     * @private
     * @return DOMElement
     */
    createEmptyGrid_:function(){
      var empty = createElement( 'div' );
      empty.className = "empty";
      return empty;
    },
    /**
     *
     */
    destroy:function(){
      clearDOMElement( this.dom_ );
      var parentNode = this.dom_.parentNode;
      if ( parentNode ) parentNode.removeChild( this.dom_ );
      this.dom_ = null;
    },
    /**
     * @param {Object} data
     * @param {Object} opts
     */
    render:function( data, opts ){
      var opts = opts || {},
      partialNumber = opts.partialNumber || 1,
      fragment = createDocFragment(),
      partialIndex = Math.round( data.length / partialNumber );

      for ( var i in data ) {
        var classNames = ['grid'], grid = createElement( 'div' );
        data[i] ? classNames.push( 'on' ): "";
        grid.className = classNames.join( ' ' );
        fragment.appendChild( grid );
        //create empty grid
        if ( i != 0 && i % partialIndex == ( partialIndex - 1 ) ) {
          var emptyGrid = this.createEmptyGrid_();
          fragment.appendChild( emptyGrid );
        }
      }

      var clearfixDom = createElement( "div" );
      clearfixDom.className = "clearfix";
      fragment.appendChild( clearfixDom );
      clearDOMElement( this.dom_ );
      this.dom_.appendChild( fragment );
    },

    /**
     * @return DOMElement
     */
    getContainer:function(){ return this.dom_; }
  };

  /*
   * @namespace
   */
  var progressFactory = {
    /*
     * @param {DOMElement} dom
     * @param {Object} data
     * @param {Object} opts
     */
    render:function( dom, data, opts ){

      var progressBar = new ProgressBar();
      progressBar.render( data, opts );
      dom.appendChild( progressBar.getContainer() );
      return progressBar;
    }
  };
  

  if ( typeof window != "undefined" ) {

    window.progressFactory = progressFactory;
  }

  if ( typeof module != "undefined" ) {

    module.exports = progressFactory;
  }

})( document );

