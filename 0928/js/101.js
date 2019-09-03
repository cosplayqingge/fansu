// 轮播图
var aImg = document.querySelectorAll('.carousel-imgs-item');
var aLeftArrow = document.querySelector('.left-arrow');
var aRightArrow = document.querySelector('.right-arrow');
var aBtn = document.querySelector('.carousel-btn').children;
var oCarousel = document.querySelector('.carousel')
var now = 0;

function tab(){
	for(var i = 0;i<aImg.length;i++){
		aImg[i].style.zIndex  = '0';
		aImg[i].style.opacity  = '0';
		aBtn[i].className = '';
	}
	aImg[now].style.zIndex = '99';
	aImg[now].style.opacity  = '1';
	aBtn[now].className = 'active';
}
aRightArrow.onclick = function(){
	now++;
	if(now >= aImg.length){
		now = 0;
	}
	tab();
}
aLeftArrow.onclick = function(){
	now--;
	if(now < 0){
		now = aImg.length-1;
	}
	tab();
}
for(var i = 0;i<aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onclick = function(){
			now = this.index;
			tab();
		}
	}

	timer = setInterval(aRightArrow.onclick,1000);
	oCarousel.onmouseover = function(){
		clearInterval(timer);
	}
	oCarousel.onmouseout = function(){
		timer = setInterval(aRightArrow.onclick,1000);
	}



//选项卡
	var oBtn = document.querySelectorAll('.tab-list li');
	var aConcat = document.querySelectorAll('.tab-container li');
	for(let i = 0;i<oBtn.length;i++){
		oBtn[i].onclick = function(){
			for(let j = 0;j<oBtn.length;j++){
				oBtn[j].className = 'left son';
				aConcat[j].style.display = 'none';
			}
			this.className = 'left son koll';
			aConcat[i].style.display = 'block'; 
		}
	}
