// 설치용 페이지(껍데기)와 아이콘만 저장해 두는 서비스 워커예요.
// 학급 기록 내용은 저장하지 않고, 늘 Apps Script 웹앱에서 새로 받아 와요.
const CACHE = 'neulpum-shell-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// 이 사이트의 파일만 다뤄요. 인터넷이 되면 새 파일을, 안 되면 저장해 둔 파일을 보여 줘요.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(event.request, copy)); return res; })
      .catch(() => caches.match(event.request).then((hit) => hit || caches.match('index.html')))
  );
});
