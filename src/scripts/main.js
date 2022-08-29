function main() {
  // console.log('hello world');
  const eventList = document.querySelector(".events-list");

  for (let i = 0; i < 3; i++) {
    const evt = new EventComponent();
    evt.render(eventList);
  }

  // Duplicated Code (Anti-pattern)
  // const evt1 = new EventComponent();
  // evt1.render(eventList);
  // const evt2 = new EventComponent();
  // evt2.render(eventList);
  // const evt3 = new EventComponent();
  // evt3.render(eventList);
}

// main();
// window.addEventListener('load', main);
window.addEventListener("DOMContentLoaded", main);
