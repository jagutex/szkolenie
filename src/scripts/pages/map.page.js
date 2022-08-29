class MapPage {
  template() {
    return `
      <div id="map-page">
        <h3>This is a map page</h3>
      </div>
    `;
  }

  render($container) {
    // Compile
    const $component = compile(this.template());
    // Rendering
    $container.append($component);
  }
}
