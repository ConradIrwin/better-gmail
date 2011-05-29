//<div id="me" style="width:200px; height:30px; margin:100px 0 0 100px; background:#36C">
//	<div class="title">Show me the money</div>
//	<div class="menu" style="background:#CCC;position:absolute;display:none;z-index:200;">
//		<div>Some thing to show 1</div>
//		<div>Some thing to show 2</div>
//		<div>Some thing to show 3</div>
//		<div>Some thing to show 4</div>
//		<div>Some thing to show 5</div>
//	</div>
//</div>

//$(function(){
//	$('#me').dropDown({
//		menu:'.menu',
//		title:'.title',
//		placement:true
//	});
//});


(function($){
	$.fn.dropDown = function(options){
		var defaults = {
			menu:'',
			activate:'hover',
			title:'',
			container:'',
			afterClick:function(){}
		},
		settings = $.extend({},defaults, options);
		this.each(function(){
			var $this= $(this);
			if(settings.activate == "click") {
				$this.click(function(){
					$(settings.menu).toggle(50);
				});
				$(settings.menu).children().click(function(e){
					var color = $(e.target).css('background-color');
					$('.color').attr('color', color);
					settings.afterClick.call(this);
				});	
				$(document).click(function(e){
					if(!$(e.target).is(settings.container +', '+ settings.container +' *')){
						$(settings.menu).hide(50);
					}
				});	
			}
		});
	}
})(jQuery);