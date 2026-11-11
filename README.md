# SVINplayer landing page

Static site served from `index.html` and `style.css`.

## Browser regression tests

Requires Node.js 20 or newer.

```sh
npm ci
npx playwright install chromium
npm test
```

The tests open the local HTML directly; no web server is required. To use an
existing Chrome/Chromium installation instead of downloading a browser:

```sh
CHROMIUM_PATH=/path/to/chrome npm test
```
