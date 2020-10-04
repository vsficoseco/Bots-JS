//SNIPPET 1. Tiene todas las funciones, se ejecuta junto con snippet 2

var rando = new (function () {
  function getRandomInt(x) {
    return Math.floor(Math.random() * x);
  }

  function getRandomItemIndex() {
    max = document.querySelectorAll("ul.todo-list li").length;
    if (max === 0) {
      console.log("no items to choose from");
      return 0;
    }
    x = getRandomInt(max) + 1;
    return x;
  }

  this.selectRandomItem = function () {
    x = getRandomItemIndex();
    if (x > 0) {
      console.log("select item " + x);
      autoTodo.selectItemX(x);
    }
  };

  this.toggleAll = toggleAll;
  console.log("toggle all");
  autoTodo.toggleAll();

  this.createRandomTodo = function () {
    console.log("create todo");
    autoTodo.createTodo("random todo " + Date.now());
  };

  this.amendRandomTodo = function () {
    x = getRandomItemIndex();
    if (x > 0) {
      console.log("amend todo" + x);
      autoTodo.amendTodo(x, "amended random todo " + Date.now());
    }
  };
})();
