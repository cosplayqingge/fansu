//生成属性大小和坐标
function Box(parent,options){
	//设置对象属性
	var options = options || {};
	this.backgroundColor = options.backgroundColor || 'red';
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.x = options.x || 0;
	this.y = options.y || 0;


	//创建div
	this.div = document.createElement('div');
	this.parent = parent;
	parent.appendChild(this.div);

	//在外面设置div 的样式
	this.init();





}	

//初始化div 方块的样式
Box.prototype.init = function(){
	var div = this.div;
	div.style.backgroundColor = this.backgroundColor;
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.left = this.x + 'px';
	div.style.top = this.y + 'px';
  // 脱离文档流
 	div.style.position = 'absolute'
}


//随机生成方块位置
Box.prototype.random = function () {
  // 父容器的宽度/方块的宽度  总共能放多少个方块
  var x = tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
  var y = tools.getRandom(0, this.parent.offsetHeight / this.height - 1) * this.height;

  this.div.style.left = x + 'px';
  this.div.style.top = y + 'px';
}








