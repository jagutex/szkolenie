class Router {
  use(routes) {
    this.routes = routes;
  }

  start() {
    this.#resolveRoute();
    window.addEventListener("hashchange", this.#resolveRoute.bind(this));
  }

  #resolveRoute() {
    this.#clearOutlet();
    const { routes } = this;
    const hash = location.hash.slice(1);
    const handler = routes[hash];
    handler?.();
  }

  #clearOutlet() {
    const $outlet = document.querySelector("#content");

    if (!$outlet) {
      // Early return
      return;
    }

    // console.time("clear DOM tree with innerHTML property");
    // $outlet.innerHTML = "";
    // console.timeEnd("clear DOM tree with innerHTML property");

    console.time("clear DOM tree with removeChild function");
    while ($outlet.firstElementChild) {
      $outlet.removeChild($outlet.firstElementChild);
    }
    console.timeEnd("clear DOM tree with removeChild function");

    // console.time('clear DOM tree with remove function');
    // while ($outlet.firstElementChild) {
    //   $outlet.firstElementChild.remove();
    // }
    // console.timeEnd('clear DOM tree with remove function');
  }
}
