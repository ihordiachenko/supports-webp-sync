# supports-webp-sync

[![npm](https://img.shields.io/npm/v/supports-webp-sync.svg)](https://www.npmjs.com/package/supports-webp-sync) [![npm](https://img.shields.io/bundlephobia/minzip/supports-webp-sync)](https://www.npmjs.com/package/supports-webp-sync)



Checks if the browser supports WebP without any costly requests.

May give false negatives for some obscure non-WebKit browsers.

Live check: https://ihordiachenko.github.io/supports-webp-sync/

## Install

```bash
npm i -S supports-webp-sync
```

## Usage

```js
import { checkWebPSupport } from 'supports-webp-sync'

if (checkWebPSupport()) {
  // Get some WebP images
}
```
