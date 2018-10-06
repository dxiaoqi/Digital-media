/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a03dace73763b9da1649fed139a0df3"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.42e3ef6d.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/styles.b74345f4.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.babd7481.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/2.42e3ef6d.js",
    "revision": "82f65a9a144500138634129752479713"
  },
  {
    "url": "assets/js/3.e1486283.js",
    "revision": "775e86f2b18dcdc43c3bf515372ade16"
  },
  {
    "url": "assets/js/4.0427fcbb.js",
    "revision": "8aa9e62c9da5210dc160a631d25b52cf"
  },
  {
    "url": "assets/js/5.8eb2954e.js",
    "revision": "d56dc4f3e07b5b6649ad9a25a61bfccd"
  },
  {
    "url": "assets/js/6.b4aa03d6.js",
    "revision": "2bee21da3880fbf8abaa5024791a2874"
  },
  {
    "url": "assets/js/app.b74345f4.js",
    "revision": "5b3b94f525a2b50c1027d6de59b8c7c8"
  },
  {
    "url": "index.html",
    "revision": "6d367ef974f01fb69028c76ef8e454ee"
  },
  {
    "url": "数字媒体技术/index.html",
    "revision": "e8d71b948e94c092de01c88feb31a944"
  },
  {
    "url": "数字媒体艺术/index.html",
    "revision": "f44c4cd6a7db564a4b26ec2a973ce1f3"
  },
  {
    "url": "综合/index.html",
    "revision": "87bdbe8c7a4c9fda77f3e17b4efd988e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
