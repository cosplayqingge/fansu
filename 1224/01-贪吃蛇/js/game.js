// 使用自调用函数，创建一个新的局部作用域，防止命名冲突
(function () {
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
  }

  Game.prototype.start = function () {
    // 1 把蛇和食物对象，渲染到地图上
    this.food.render(this.map);
    this.snake.render(this.map);
    // 2 开始游戏的逻辑
  }
    // 私有的函数  让蛇移动
   function runSnake() {
     var timerId = setInterval(function () {
       // 让蛇走一格
       // 在定时器的function中this是指向window对象的
       // this.snake
       // 要获取游戏对象中的蛇属性
       that.snake.move();
       that.snake.render(that.map);

        // 2.2  当蛇遇到边界游戏结束
        // 获取蛇头的坐标
        var maxX = that.map.offsetWidth / that.snake.width;
        var maxY = that.map.offsetHeight / that.snake.height;
        var headX = that.snake.body[0].x;
        var headY = that.snake.body[0].y;
        if (headX < 0 || headX >= maxX) {
          alert('Game Over');
          clearInterval(timerId);
        }

        if (headY < 0 || headY >= maxY) {
          alert('Game Over');
          clearInterval(timerId);
        }
     }, 150);
   }

  // 暴露构造函数给外部
  window.Game = Game;
})();

// 测试
var map = document.getElementById('map');
var game = new Game(map);
game.start();
