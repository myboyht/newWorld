/*depend by jquery*/


function opentips(tipstell,timeout){
		if(tipstell==undefined){tipstell=''};
		this.tipopen=function(tipstell,timeout){
			if(timeout==undefined){timeout=2000};
			this.timeout = timeout;
			this.tipsfont=tipstell;
			this.temp = '<div class="ht-tips-errorbox">'+
						'<div class="tips top-in">'+
							this.tipsfont+
						'</div>'+
						'</div>'	
			
			if($('body').has('ht-tips-errorbox').get(0)){
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
		}
						
	}
