$.fn.extend({
	luckDraw:function(data){
		var anc = $(this); //祖父元素
		var lotteryBox=$(this).parent().parent();
		var lot=$(this).parent().prev();
		var list = anc.children("li");
		var click; //点击对象
		var allNum;//实际奖品总数
		var lineNumber; //几行 3
		var	listNumber; //几列 4
		var thisWidth;
		var thisHeight;
		if(data.line==null){return;}else{lineNumber=data.line;}
		if(data.list==null){return;}else{listNumber=data.list;}
		if(data.width==null){return;}else{thisWidth=data.width;}
		if(data.height==null){return;}else{thisHeight=data.height;}
//		if(data.allNum==null){return;}else{allNum=data.allNum;}
		if(data.click==null){return;}else{click=data.click;}

		///---初始化
		var allWidth=thisWidth*listNumber+listNumber*0.04;
		var allHeight=thisHeight*lineNumber+lineNumber*0.04;
		lotteryBox.css({
			width:thisWidth*listNumber+listNumber*0.04+'rem',
			height:thisHeight*lineNumber+lineNumber*0.04+'rem',
			position:"relative"
		});
		lot.children('h3').css({
			'width':allWidth-(thisWidth*2+0.04*2)-0.04+'rem',
			'height':allHeight-(thisHeight*2+0.04*2)-0.04+'rem',
			'line-height':allHeight-(thisHeight*2+0.04*2)-0.04+'rem'
		})
		anc.css({
			width:thisWidth*listNumber+listNumber*0.04+'rem',
			height:thisHeight*lineNumber+lineNumber*0.04+'rem',
			position:"relative"
		});
		list.css({
			width:thisWidth+'rem',
			height:thisHeight+'rem',
			position:"absolute"
		});
		
		var all = listNumber*lineNumber - (lineNumber-2)*(listNumber-2)  //应该有的总数
		if(all>list.length){ //如果实际方块小于应该有的总数
			for(var i=0;i<all-list.length;i++){
				anc.append("<li class='lottery-unit lottery-unit-"+ i +"'><img src='images/3.png'/><p class='lottery_pitch'></p></li>");
			}
		}
		list = anc.children("li");
		list.css({
			width:thisWidth+'rem',
			height:thisHeight+'rem',
			position:"absolute"
		});
		lot.children('h3').css({
			width:allWidth-(thisWidth*2+0.04*2)-0.04+'rem',
			height:allHeight-(thisHeight*2+0.04*2)-0.04+'rem',
			'line-height':allHeight-(thisHeight*2+0.04*2)-0.04+'rem'
		})
		
		list.each(function(index){
			if(index < listNumber){  //---小于listNumber列
				if(index>0){
					$(this).css({
						left:index%listNumber*thisWidth+index*0.04+'rem'
					});
				}else{
					$(this).css({
						left:index%listNumber*thisWidth+'rem'
					});
				}
			}
			else if(index >= listNumber && index < listNumber+lineNumber-2){
				$(this).css({
					top:(index-(listNumber-1))*thisHeight+(index-(listNumber-1))*0.04+'rem',
					right:0
				});
			}
			else if(index >= listNumber+lineNumber-2 && index < all-lineNumber+2){
				if(index <= lineNumber+(listNumber-2)){
					$(this).css({
						bottom:0,
						right:(index-(lineNumber+(listNumber-2)))*thisWidth+'rem'
					});
				}else{
					$(this).css({
						bottom:0,
						right:(index-(lineNumber+(listNumber-2)))*thisWidth+(index-(lineNumber+(listNumber-2)))*0.04+'rem'
					});
				}
			}else{
				/*
				*/
				$(this).css({
					bottom:(index-(listNumber*2+(lineNumber-3)))*thisHeight+(index-(listNumber*2+(lineNumber-3)))*0.04+'rem',
					left:0
				});
			}
			if(index+1 > all){
				$(this).remove();
			}
		});
	}

});   