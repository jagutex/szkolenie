function tick(label, label2) {
  console.log(label, label2, Date.now());
}

// setInterval(tick.bind(null, 'ciasteczko', 'serniczek'), 1000);
setInterval(tick, 1000, 'ciasteczko', 'serniczek');

// setInterval(tick(), 1000);
