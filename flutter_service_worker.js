'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae6545095e3a44e77696306a8721196d",
"assets/AssetManifest.bin.json": "0d32f94755a42593a66845fdd1a4b886",
"assets/AssetManifest.json": "dd48c7a6ca15a9f9959a9dc89caea9ac",
"assets/assets/anime_explore.webp": "afd32c092283c56d8a96c8688b0ea343",
"assets/assets/dock.png": "d8af278c0730e4f19ebeaab5724d07fb",
"assets/assets/favicon.jpg": "28a522c049cda26cbfdb03ba7c211237",
"assets/assets/funnel.jpg": "0830852f5931559ff7278361f8188cb9",
"assets/assets/house_price.jpg": "f1293976105195e436ba332a83e4c787",
"assets/assets/imdb.png": "8d1a1bc844359c76951cab0ac18dff88",
"assets/assets/me.jpeg": "fbd2d0f168bb60627e342995194380fd",
"assets/assets/polyrhythm.jpg": "683f70d834e423c5d7828388dff21c38",
"assets/assets/removebg.png": "7a26e7445cd90fc87c7b68595c7a70d8",
"assets/assets/spotify.jpg": "4098738a9e38517df935a46f775ede68",
"assets/assets/todo.png": "5d7620d77fe2b64e66162891670846ba",
"assets/assets/weather.jpg": "d6c1eb79aa977f6a02a68a8a9d935ced",
"assets/assets/weather.png": "fef903a40747978fbdfad97410bf2620",
"assets/FontManifest.json": "1da8478248f1d3909d2e9ea4789d1e6f",
"assets/fonts/JetBrainsMono-Bold.ttf": "8658ffe39dbfa1c12436789a50212180",
"assets/fonts/JetBrainsMono-BoldItalic.ttf": "a6d89cbaeda9ce8e23109383e0722f76",
"assets/fonts/JetBrainsMono-ExtraBold.ttf": "1e8904787ca346b750a6d425e543b6f8",
"assets/fonts/JetBrainsMono-ExtraBoldItalic.ttf": "b4de3b330494410118d5db620c179765",
"assets/fonts/JetBrainsMono-ExtraLight.ttf": "6ec36ffaff8fd3902485078869d8db14",
"assets/fonts/JetBrainsMono-ExtraLightItalic.ttf": "1dc4c64e64a29c9edffe78d7df6747c5",
"assets/fonts/JetBrainsMono-Italic.ttf": "348ef43cb2b4be35e6489fd9a1261ce0",
"assets/fonts/JetBrainsMono-Light.ttf": "5f68b90fb3ae2b26792475f2e92f966a",
"assets/fonts/JetBrainsMono-LightItalic.ttf": "1b1eaaefea8194fcc4f28cb721d3fc80",
"assets/fonts/JetBrainsMono-Medium.ttf": "b41d61d1b5a063fdcb6a7cdeacac57b0",
"assets/fonts/JetBrainsMono-MediumItalic.ttf": "d342311bd6965cf2369c76dacaebe293",
"assets/fonts/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/fonts/JetBrainsMono-SemiBold.ttf": "fa952b0ebc58a82f6fcfff6250284bc7",
"assets/fonts/JetBrainsMono-SemiBoldItalic.ttf": "322be2a6fec0f4a6b1269f657a61a692",
"assets/fonts/JetBrainsMono-Thin.ttf": "4abec0295db416a000ea0d1dcec54964",
"assets/fonts/JetBrainsMono-ThinItalic.ttf": "54849b7b14a6f0cbc2cd3aabc4edf38b",
"assets/fonts/MaterialIcons-Regular.otf": "a270c1128a0cd862d978ed527b6cce4d",
"assets/NOTICES": "1a48bf1e180f5f2b6b78b30f5348802b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4d35f638b1697021b69745743ff86903",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e2f3cbf3069d199b906275fbd1af262",
"/": "5e2f3cbf3069d199b906275fbd1af262",
"main.dart.js": "51bfdb71d9f83a37ccf4b455b05980c8",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
