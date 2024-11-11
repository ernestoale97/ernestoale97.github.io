'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"index.html": "59953024d2d2ff4af37d29c8c435cc4b",
"/": "59953024d2d2ff4af37d29c8c435cc4b",
"manifest.json": "8a908397ca9f94fc122856f556a9f9ea",
"main.dart.mjs": "d695572c7472460eb31f22f690b8dc72",
"splash/img/dark-3x.png": "3ca9db02701357e39fd2bcdd0b73fb34",
"splash/img/light-3x.png": "3ca9db02701357e39fd2bcdd0b73fb34",
"splash/img/dark-1x.png": "459065fffc80db7fec404f186bff1374",
"splash/img/light-4x.png": "0655e5120ef406d2804e9863813df276",
"splash/img/light-1x.png": "459065fffc80db7fec404f186bff1374",
"splash/img/dark-2x.png": "aae2809a4e7a84e59d3c93e0089a18e5",
"splash/img/light-2x.png": "aae2809a4e7a84e59d3c93e0089a18e5",
"splash/img/dark-4x.png": "0655e5120ef406d2804e9863813df276",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/logs/refs/heads/main": "3e8f270055054dc7787c0ec2fe741bff",
".git/logs/refs/remotes/origin/main": "f051959c222c2cdd7d6ec68ba90cc42d",
".git/logs/HEAD": "6a7726c810e3e02db9a9745c6dd6fea4",
".git/refs/heads/main": "fdbfd07e531e9fbf845ad2b99f19d089",
".git/refs/remotes/origin/main": "fdbfd07e531e9fbf845ad2b99f19d089",
".git/config": "036974513396da9d72dfd613c8d22b97",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/bf/d0f0060f198eed9400e84f36206fb81bffe2be": "fbd71e8541ac57caaad75fcc50f3b1d5",
".git/objects/13/d8061fb9a4117c1d5965593356580a8fedbf4d": "52cab6b127393f521a109fe67a18efbe",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/97/8ef93b736855d6fe80d001109717319f538c3a": "7d717a5c9bb167b0d9e17ff8aadd8e91",
".git/objects/87/78541f6c62a5db5f1ccdbd8881bb1d4ad36d3a": "80acc9d77efbd79b152b6e6d5069478e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/76/42078b515f2a226344fc1ad958d25cf9b2a13f": "60564d16cd7502dc412436d67a50ad7d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/7a/53ab4159af866688eb5b28fccdc02c794db348": "d4728e66a84d17fe251c681ca7a0114e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/ff/8657f53bda2ebfa3c282fa00874384e349cb11": "8a5ef119824ea32bb38e1e7b3c330fc9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/61/4e01a7ffaaa7492495e9d34559f4c4c5530d9b": "6a41ca2b676c7f8e4ded12663e5096bc",
".git/objects/44/75bd9ae3a2412b6870eec44a1ef54bb9ec2ec3": "83fead413984d8cea9bb0f33d79289db",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4c/01c130933eb22b5c37571eb9f294f3eb45ada0": "2a03d40482a49c621a295d16543ecb7b",
".git/objects/ca/08582469675120cd5c048fce76d830334588eb": "9d51304b155b094710d6a5bf416d7e0b",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/37/d7140ba95406a09c13654e6248625b81af777d": "5265cbeaff4b231c3fe14e4a3011e9f9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/82f012f07e6a2ac3c5ffe34e8102dfdcb2bab5": "d4b6353d7bd83038da7386584ee07ec4",
".git/objects/9f/ea6573cbc15c6e5c7ea358bcda1d97371acf3b": "a8554f845d8e80192313d0772d62f017",
".git/objects/cb/190e1b65f2a259d288610262024be8876d2dd1": "d967e4078cfd2a7d2be2403ce4dc12d2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a0/df0126a78e87bc105e93109134b9f7530d943e": "64f0af74103437bb0d159ba1ee3f7ce9",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a5/5e9a23863754fa98316cf73f964d1fdcf3858f": "873c77e6ff167fc816cfb106c750edd6",
".git/objects/80/290318c818172112ebd664bb46343723ce196a": "10fd692976995b53b94011fb8cb5b7d6",
".git/objects/3c/28bbb6c385ce608d50927a083be05bd55527a7": "fe6072b661e0ca7f804f984644515ac3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d5/816a171d0e4c7d9d8a03d7de8663f824a2e526": "6228df2b48cb93bd0c4305a830d85f04",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a3/e60577291eb2a2cef91850dfcda35072cb77ca": "7ad841a2c644ec7d31fa71e2bd397d33",
".git/objects/c4/d7d35cd34571dcf1a871cd374f7c08b88dd1d3": "04ab89d065e5ba3327a55d09485babb0",
".git/objects/1e/a103a433964ec57ddf61c16de8fab0d0674884": "d9fe9113e3521485069acd8864d56e61",
".git/objects/c7/8207ba35e23f32bd530341137d18b8e9ee66d1": "1e61a4f8b3c7d75908f09d4cf686e20e",
".git/objects/72/5b9f5ae96c15b13d9d3536a6538fc85305a45e": "72535b3914a84725560673d34bfa3eac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2f/506379edc24b5796840b5a7876411f0f2ca966": "11b2561f95ddc646240d1248b3a94edf",
".git/objects/2f/7f92ec64172664922bda46e970a5d79e99eb59": "3d6b679db0d336b5444db3d0db98f3f3",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/c02757838f65e29b5fa156b45bcc596d913b60": "6caa4510e51032e7352bcb69bd269b5c",
".git/objects/32/fa82e49a69d785b8b72ab4b429d9b9566ba82c": "c0894a456eacb47d59a461ebfdde00e6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/index": "0e604feb181041336b39390ded35bbe2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"main.dart.js": "293b06ac4529eb9a9be71cc1cf893245",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.wasm": "e9a1d7c6ee2b261f23e4af681c63a063",
"flutter_bootstrap.js": "5219cc7e46cecd6feb627f4700faf1c3",
"version.json": "4139d2170fc7e38e7f15865b820382ee",
"assets/AssetManifest.bin.json": "9b2a6387401c411b0376ee2ec9fecd33",
"assets/AssetManifest.bin": "5ba0d8020033a6e676fc6b2ac07a8d26",
"assets/NOTICES": "1dc38c7de6d6e564d14003bd5cc15904",
"assets/AssetManifest.json": "1b5f39c915ccc5a897a9a5effe0e9dde",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/FontManifest.json": "30dbdca0d297b3b8954b6ffb843fe2a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/php.svg": "3cc2d02313c9fb55673de11c09a2d1ad",
"assets/assets/images/laravel.svg": "82639bcdcf4afbefaebfed38a7c7fab4",
"assets/assets/images/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/images/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/proyects/touch.png": "0849c4a3eebf363e7be80855b9a708e7",
"assets/assets/images/proyects/transix_content.png": "223853a908565e7344afe1b6d9853333",
"assets/assets/images/proyects/intelix_quiz.png": "75e93048e136e285df0e21f3570f37eb",
"assets/assets/images/proyects/fxlive_capital.png": "7fcdf87266ea49831ab13702b115ca07",
"assets/assets/images/proyects/shopping_analist.png": "e234d3dd6f2f5db47361e5b5e808912f",
"assets/assets/images/proyects/saborcubano_menu.png": "592650265b520f626e6e33792a842632",
"assets/assets/images/proyects/intelix_evaluation.png": "8f0f8ad4fc19a8d039c11f132ca95be1",
"assets/assets/images/proyects/saborcubano_rest.png": "f1340ed20eb2531a8b7801a6461688cd",
"assets/assets/images/proyects/saborcubano_web.png": "e93ba1b25030fd483278d2446fa331f3",
"assets/assets/images/proyects/befunding.png": "7d2a2764e3393d74672d957e43a8b9dc",
"assets/assets/images/proyects/odoo_home.png": "b16bbb65a71f24e38d7c92db56e195bc",
"assets/assets/images/proyects/odoo_products.png": "d2fbbad7f8c4c08430cfcecde02dca75",
"assets/assets/images/proyects/mibazar2.png": "9e21c949c0da1e4298772408dd542664",
"assets/assets/images/proyects/touch-converter.png": "534746f5eaae66fa5243ad4d008819f4",
"assets/assets/images/proyects/fxlive_capital_categories.png": "6866d194987fb75e1b8fbdd83dc30db8",
"assets/assets/images/proyects/mibazar.png": "9e220a274b3b34b8ce5d7bf6456da1bc",
"assets/assets/images/proyects/transix_categ.png": "6d574523a51a1ae6862ab8989cd5ab89",
"assets/assets/images/proyects/tucompra_drawer.png": "976077eb0c399fb3fa6e4de79e02c859",
"assets/assets/images/proyects/mmtech-central.png": "a974e36c0fb5714c26fc29c410972847",
"assets/assets/images/proyects/saborcubano_home.png": "4d880e9d2ac350e3e7dfb24937162fa8",
"assets/assets/images/proyects/tucompra_qr.png": "d6adb3a65dfc504c382401ef97f5b929",
"assets/assets/images/proyects/odoo_sales.png": "a0262a2801cb1304869a94e5216cb2ff",
"assets/assets/images/proyects/tucompra_home.png": "0801b602bc88ac75b2b775ae553a7900",
"assets/assets/images/proyects/touch-home.png": "061ef7fea37ac4bad6edaedc24647916",
"assets/assets/images/proyects/qvalike.png": "c0504d8502df187ba291663919441221",
"assets/assets/images/proyects/odoo_sales_detail.png": "33b06c9b7506e433cf3458b51d69bf1e",
"assets/assets/images/proyects/transix_splash.png": "f497b32b7260df4b9b190b615cb71f56",
"assets/assets/images/proyects/saborcubano.png": "80c6f216a5ce0da42ecec01ec38cc102",
"assets/assets/images/proyects/mmtech_central_transactions.png": "480ec105b9d97af98bc81e514bbddc15",
"assets/assets/images/proyects/intelix_home.png": "d797a647f732fa2c83a737ce71e24c0b",
"assets/assets/images/hasura.svg": "24e6e0a6122243022f5c0dc7631109ff",
"assets/assets/images/icon-portfolio.png": "9cf39f82193453e685361b50be2b3ffa",
"assets/assets/images/sqlite.svg": "266cdf99ee33451f17ded1414a10254f",
"assets/assets/images/golang.svg": "da9b1fca96a8bcbcfa87b14985886764",
"assets/assets/images/yii.svg": "76994b1be83b1a10513ab12286220b0b",
"assets/assets/images/docker.svg": "f6b321e2cc55c2bcef0fc45a6b346acc",
"assets/assets/images/angular.svg": "e409c049456aaebb70112ab81209f674",
"assets/assets/images/mongo.svg": "ebf723d47dc4203868088d005452543b",
"assets/assets/images/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/me.jpg": "eb4fa0c6be164728cfed99a72fcbf675",
"assets/assets/images/postgres.svg": "bae4eabea5c2343f4346dcbb29ecf4ee",
"assets/assets/images/redis.svg": "b933114f1c9065fbce04bf0a643299de",
"assets/assets/images/postman.svg": "fbfb57a181ce251926d686d12e6cee5a",
"assets/assets/files/cv.pdf": "ec1b11dcfe221321c1e012784a533557",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
