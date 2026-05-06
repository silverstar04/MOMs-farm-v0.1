const CACHE_NAME = "moms-farm-pwa-v3";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./firebase-init.js",
  "./firebase-ranking.js",
  "./firebase-save.js",
  "./firebase-security-rules-example.txt",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-maskable-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/backgrounds/farm_background.png",
  "./assets/backgrounds/sunnyfarm_background.png",
  "./assets/backgrounds/rainyfarm_background.png",
  "./assets/backgrounds/cloudyfarm_background.png",
  "./assets/crops/wheat.png",
  "./assets/crops/corn.png",
  "./assets/crops/carrot.png",
  "./assets/crops/tomato.png",
  "./assets/crops/eggplant.png",
  "./assets/crops/pimento.png",
  "./assets/plots/plot_lv1.png",
  "./assets/plots/plot_lv2.png",
  "./assets/plots/plot_lv3.png",
  "./assets/plots/plot_lv4.png",
  "./assets/plots/plot_lv5.png",
  "./assets/animals/hen.png",
  "./assets/animals/cow.png",
  "./assets/animal-products/egg.png",
  "./assets/animal-products/milk.png",
  "./assets/products/flour.png",
  "./assets/products/feedstuff_cow.png",
  "./assets/products/feedstuff_hen.png",
  "./assets/products/bread.png",
  "./assets/buildings/windmill.png",
  "./assets/buildings/feedmill.png",
  "./assets/buildings/bakery.png",
  "./assets/openings/opening_animal.png",
  "./assets/openings/opening_building.png",
  "./assets/audio/patchwork-harvest-1.mp3",
  "./assets/audio/patchwork-harvest-2.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", responseCopy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then((response) => {
        if (response && response.ok) {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseCopy));
        }
        return response;
      });
    })
  );
});
