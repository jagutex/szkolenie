function main() {
  // console.log('hello world');

  const $outlet = document.querySelector("#content");

  const routes = {
    "/": () => {
      const page = new HomePage();
      page.render($outlet);
    },
    "/map": () => {
      const page = new MapPage();
      page.render($outlet);
    },
  };
  const router = new Router();
  router.use(routes);
  router.start();

  // Hermetyzacja / Encapsulate
  // router.#resolveRoute();
}

// main();
// window.addEventListener('load', main);
window.addEventListener("DOMContentLoaded", main);
