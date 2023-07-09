const cacheName = "::keqing-group-ebook";
const version = "v0.0.1";

self.addEventListener("install", (event: ExtendableEvent) => {
  console.info('Service worker installed')
  event.waitUntil(
    caches.open(version + cacheName).then(function (cache) {
      return cache.addAll(["/", "/offline"]);
    })
  );
});

self.addEventListener('active', () => {
  console.info('Service worker is ative')
})