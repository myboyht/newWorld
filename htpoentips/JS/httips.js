/*depend by jquery*/


/*small tips show hide box*/
function opentips(tipstell,timeout){
		if(tipstell==undefined){tipstell=''};
		this.tipopen=function(tipstell,timeout){//提示语  消失时间毫秒计算
			if(timeout==undefined){timeout=2000};
			this.timeout = timeout;
			this.tipsfont=tipstell;
			this.temp = '<div class="ht-tips-errorbox">'+
						'<div class="tips top-in">'+
							this.tipsfont+
						'</div>'+
						'</div>'	
			
			if($('body').has('.ht-tips-errorbox').get(0)){
				return
			}else{
			$('body').append(this.temp)
			var t1 = setTimeout(function(){
				$(".ht-tips-errorbox").addClass('optyhide');
				var t2 =setTimeout(function(){
					$('body .ht-tips-errorbox').remove();
				},400)
			},this.timeout)
			}
		};
		/*small tips show hide box END*/
		
		
		this.onebtnbox=function(biaoti,tipstell,btnfont,btnfun,closefun){//标题  内容 按钮文字  点击确定 点击关闭
			if(biaoti==undefined){biaoti='提示1'};
			if(btnfont==undefined){biaoti='确定'};
			if(btnfun==undefined){
				btnfun=function(){
					publickclose();
				}
			}
			if(closefun==undefined){
				closefun = function (){
					publickclose();
				}
			}
			publickclose=function(){
				$(".ht-tips-tishibox").removeClass('botshow').addClass('bothide');
				$(".pmblack").addClass('optyhide');
				var t4 = setTimeout(function(){$(".pmblack").remove()},600)
			}
			this.btnfont = btnfont;
			this.biaoti = biaoti;
			this.tipsfont=tipstell;
			this.temp=  '<div class="pmblack">'+
						'<div class="ht-tips-tishibox">'+
						'<button class="closetop">'+
							'<i></i>'+
							'<i></i>'+
						'</button>'+
						'<h2 class="tiphead">'+this.biaoti+'</h2>'+
						'<p class="tipsbody">'+this.tipsfont+'</p>'+
						'<div class="btn-group-1 ">'+
						'	<button onclick="">'+this.btnfont+'</button>'+
						'</div>'+
						'</div>'
						
			if($('body').has('.ht-tips-tishibox').get(0)){
				return
			}else{
				$('body').append(this.temp);
				$(".ht-tips-tishibox").addClass('botshow');
				$(".ht-tips-tishibox .closetop").on('click',function(){
					closefun()
				})
				$(".ht-tips-tishibox .btn-group-1").on("click",function(){
					btnfun();
				})
			}
		}
		/*singal btn tips show hide box END*/
		
		
		this.doblebtnbox=function(biaoti,tipstell,btnfont,leftbtnfont,btnfun,leftbtnfun,closefun){
			//标题  内容  确定按钮文字 取消按钮文字  确定按钮方法 取消按钮方法 关闭按钮方法
			if(biaoti==undefined){biaoti='提示1'};
			if(btnfont==undefined){biaoti='确定'};
			if(leftbtnfont==undefined||leftbtnfont==''){leftbtnfont='取消'}
			if(btnfun==undefined){
				btnfun=function(){
					publickclose();
				}
			}
			closefun==undefined?closefun = function (){publickclose();}:'';
			
			leftbtnfun==undefined?leftbtnfun = function(){publickclose();}:'';
			
			publickclose=function(){
				$(".ht-tips-tishibox").removeClass('botshow').addClass('bothide');
				$(".pmblack").addClass('optyhide');
				var t4 = setTimeout(function(){$(".pmblack").remove()},600)
			}
			this.btnfont = btnfont;
			this.biaoti = biaoti;
			this.tipsfont=tipstell;
			this.leftbtnfont = leftbtnfont;
			this.temp=  '<div class="pmblack">'+
						'<div class="ht-tips-tishibox">'+
						'<button class="closetop">'+
							'<i></i>'+
							'<i></i>'+
						'</button>'+
						'<h2 class="tiphead">'+this.biaoti+'</h2>'+
						'<p class="tipsbody">'+this.tipsfont+'</p>'+
						'<div class="btn-group-2">'+
							'<button>'+ this.leftbtnfont+'</button>'+
							'<button>'+ this.btnfont+'</button>'+
						'</div>'+
						'</div>';
			
			if($('body').has('.ht-tips-tishibox').get(0)){
				return
			}else{
				$('body').append(this.temp);
				$(".ht-tips-tishibox").addClass('botshow');
				$(".ht-tips-tishibox .closetop").on('click',function(){
					closefun()
				})
				$(".ht-tips-tishibox .btn-group-2 button").eq(0).on("click",function(){
					leftbtnfun();
				})
				$(".ht-tips-tishibox .btn-group-2 button").eq(1).on("click",function(){
					btnfun();
				})
			}
			
		}
		/*doble btn tips show hide box END*/
		
	}


