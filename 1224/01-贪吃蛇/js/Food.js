(function fn(){
	function Food(optios){
		optios = optios || {};
		this.x = optios.x || 0;
		this.y = optios.y || 0;

		this.width = optios.width || 20;
		this.height = optios.height || 20;
		this.color = optios.color || 'green';
	}

	var elements = [];
	var position = 'absolute';
	//渲染
	Food.prototype.render = function(map){
		remove();
		//随机x和y
		this.x = tools.getRandom(0, map.offsetWidth/this.width - 1) * this.width;
	    this.y = tools.getRandom(0, map.offsetHeight/this.height - 1) * this.height;
		//动态创建div 页面上显示的食物
		var div = document.createElement('div');
		map.appendChild(div);
		elements.push(div)
		div.style.position = position;
		div.style.left = this.x + 'px';
		div.style.top = this.y + 'px';
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.color;
	}


	function remove(){
		for(var i = elements.length -1;i>= 0;i--){
			//删除div
			elements[i].parentNode.removeChild(elements[i]);
			//删除数组中的元素
			elements.splice(i,1)
		}
	}
	// 把Food构造函数  让外部可以访问
 	window.Food = Food;
})();


//测试
var map = document.getElementById('map')
var food = new Food();
food.render(map)
