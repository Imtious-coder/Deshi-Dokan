import handleEvent from '@shopify/hydrogen/worker';
import indexHtml from './dist/client/index.html?raw';
import entrypoint from './src/entry-server.jsx';

addEventListener('fetch', (event) => {
  try {
    event.respondWith(
      handleEvent(event, {
        entrypoint,
        indexTemplate: indexHtml,
        cache: caches.default,
        context: event,
      }),
    );
  } catch (error) {
    event.respondWith(
      new Response(error.message || error.toString(), {
        status: 500,
      }),
    );
  }
});
