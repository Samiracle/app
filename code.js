// service-worker.js

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  if (url.includes('telemetry')) {
    // Block the fetch request with "telemetry" in the URL
    event.respondWith(new Response(null, { status: 404, statusText: 'Blocked' }));
  } else {
    // Allow all other fetch requests to proceed
    event.respondWith(fetch(event.request));
  }
});
