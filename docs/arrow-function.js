// Arrow Function
const person = {
  title: "Piotr Kowalski",
  sayName() {
    setTimeout(function () {
      console.log("Function Declaration", this, this.title);
    }, 1000);
    setTimeout(() => {
      console.log("Arrow Function", this, this.title);
    }, 1000);
  },
};

person.sayName();
