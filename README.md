eh-progress-bar
===================================

![demo image](/images/progressbar.png)

This is timer for countdown.

## Install

```bash
bower install eh-progress-bar
```

## Install node modules

```bash
npm install
```

## Support

* IE7+
* chrome
* firefox

## Usage

```js
var progressbar = progressFactory.render( document.body,[
  true,true,true,true,false,false,false,true,true,false,
  true,true,true,true,false,false,false,true,true,true,
  true,true,true,true,false,false,false,true,true,false,
  false,false,false,false,false,false,false,true,true,true,
  true,false,true,false,false,false,false,true,true,true
],{
  partialNumber:5
});
```

## API

#### progressFactory.create( dom, data, opts ):ProgressBar
> Create a progress bar.

#### ProgressBar.render( data, opts ) : void
> Render a progress bar.

#### ProgressBar.destroy() : void
> Destroy a structures.

## DEMO

```bash
gulp server
```

## Build

```bash
gulp
```

