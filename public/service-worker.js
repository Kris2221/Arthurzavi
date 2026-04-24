const CACHE_NAME = "zavi-treinador-v3";
const BASE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const withBasePath = (path) => `${BASE_PATH}${path}`;
const APP_SHELL = [
  withBasePath("/"),
  withBasePath("/manifest.webmanifest"),
  withBasePath("/favicon.ico"),
  withBasePath("/favicon-16x16.png"),
  withBasePath("/favicon-32x32.png"),
  withBasePath("/apple-touch-icon.png"),
  withBasePath("/android-chrome-192x192.png"),
  withBasePath("/android-chrome-512x512.png"),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match(withBasePath("/"))))
  );
});
