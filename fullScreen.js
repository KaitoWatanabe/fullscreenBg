(function($){
	$.fn.fullScreen = function(){
		var bgElement = this;
		setWindowSize();

		var timer = false;
		$(window).resize(function() {
			if (timer !== false) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
			console.log('resized');
			setWindowSize();

			}, 200);
		});

		function setWindowSize () {
			console.log(this);
			$(bgElement).css({"height" : $(window).innerHeight(), "width" : $(window).innerWidth(), "margin" : 0});
		}
		return bgElement;
	};
})(jQuery);