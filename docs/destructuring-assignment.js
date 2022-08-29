let x = 1;
let y = 2;

y; // 1
x; // 2

// Regular approach
let temp = x; // 1
x = y; // 2
y = temp; // 1

// Destructuring Assignment
[y, x] = [x, y];
