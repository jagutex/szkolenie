class HomePage {
  template() {
    return `
      <div id="events-page">
        <div id="search"></div>
        <div class="event-list"></div>
      </div>
    `;
  }

  render($container) {
    // Compile
    const $component = compile(this.template());
    // Rendering
    $container.append($component);

    this.#setupPage();
  }

  #setupPage() {
    const $eventList = document.querySelector(".event-list");
    const $search = document.querySelector("#search");

    for (let i = 0; i < 3; i++) {
      const evt = new EventComponent();
      evt.render($eventList);
    }

    const srch = new SearchComponent();
    srch.render($search);

    // Duplicated Code (Anti-pattern)
    // const evt1 = new EventComponent();
    // evt1.render(eventList);
    // const evt2 = new EventComponent();
    // evt2.render(eventList);
    // const evt3 = new EventComponent();
    // evt3.render(eventList);
  }
}
