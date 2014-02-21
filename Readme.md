
# draw-rect

  Draw rectangle on canvas

## Installation

  Install with [component(1)](http://component.io):

    $ component install graphicsjs/draw-rect

## API

```js
var drawRect = require('draw-rect');
var canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
var ctx = canvas.getContext('2d');
drawRect(ctx, {
  x: 10,
  y: 10,
  width: 100,
  height: 50,
  fill: { style: 'rgba(0, 0, 0, 1)' },
  stroke: { style: 'rgba(0, 255, 0, 1)', width: 1 }
});
```

## License

  The MIT License (MIT)

  Copyright (c) 2014

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.