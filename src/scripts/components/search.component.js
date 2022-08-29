class SearchComponent {
  template() {
    return `
        <form class="search-control">
            <input class="search-input" />
            <input class="search-button" type="submit" value="Search" />
        </form>
    `;
  }

  render($container) {
    // Compile
    const $component = compile(this.template());
    // Rendering
    $container.append($component);
  }
}
