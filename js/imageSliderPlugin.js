(function($){
	
	$.fn.slideshow=function(options){
	
		//default settings
		var settings = {'type':'fadein-fadeout','speed':2000,'interval':3000,'clickable':false,'slide-selectable':true};

		//caching DOM
		var interval;
		var $slider = $(this);
		var $slidesContainer = $slider.find(".slidesContainer");
		var $slides = $slidesContainer.find(".slide");
		var numberOfSlides = $slides.length;
		var currentPosition = 0;
		var width = parseInt($slider.css("width"));
		var height = parseInt($slider.css("height"));
		

		//Merging settings if options not null
		if(options){
			$.extend(settings,options);
		}


		//creating left-right and up-down arrow
		var tempHtml = "<span class='move-icon move-icon-left'></span><span class='move-icon move-icon-right'></span><span class='move-icon move-icon-up' ></span><span class='move-icon move-icon-down'></span>";
		$slidesContainer.after(tempHtml);


		//creating slide selectable users see it below the slide show
		if(settings["slide-selectable"] == true)
		{
			var str = "<div class='slider-selector'>"+"<div class='slide-selector-container'>"
			for (var i = 0;i<numberOfSlides;i++){
				str = str + "<div class='slide-selector unselected-slide' slide-no='" + i + "'></div>";
			}
			str = str + "</div></div>";
			$slider.after(str);
		}


		//caching data for selected item below the slideshow .look at the circular icons
		if(settings["slide-selectable"] == true)
		{
			var $sliderSelector = $(".slider-selector");
			var $sliderSelectorContainer = $sliderSelector.find(".slide-selector-container");
			var $slideSelector = $sliderSelectorContainer.find(".slide-selector");
			$slideSelector.eq(0).addClass("selected-slide");
			$slideSelector.eq(0).removeClass("unselected-slide");
		}



		//choosing animation type and initiating the slideshow
		if(settings['type'] == "left-right" || settings['type'] == "right-left"){
			if(settings['clickable'] == true){
				$('.move-icon-left').css('display','block').css('left','0').css('top',height/2-25+"px");
				$('.move-icon-right').css('display','block').css('right','0').css('top',height/2-25+"px").prop("disabled",true).css('opacity','0');
			}
			slideLeftToRight();
		}
		if(settings['type'] == "up-down" || settings['type'] == "down-up"){
			if(settings['clickable'] == true){
				$('.move-icon-up').css('display','block').css('right','0').css('top',height/2-25+"px");
				$('.move-icon-down').css('display','block').css('left','0').css('top',height/2-25+"px").prop("disabled",true).css('opacity','0');
			}
			slideUpToDown();
		}
		if(settings['type'] == "fadein-fadeout"){
			slideFadeInFadeOut();
		}

		//slideshow left to right or right to left
		function slideLeftToRight(){	
			interval=setInterval(moveLeftToRight,settings['interval']);
		}
		function moveLeftToRight(){
			incrementPosition();
			enableDisable();
			animateLeftToRight();
			changeSlectedItem();
		}

		//slideshow top to bottom or bottom to top
		function slideUpToDown(){
			$slides.css("clear","both");
			interval=setInterval(moveUpToDown,settings['interval']);
		}
		function moveUpToDown(){
			incrementPosition();
			enableDisable();
			animateUpToDown();
			changeSlectedItem();
		}
		
		//slideshow top to bottom or bottom to top
		function slideFadeInFadeOut(){
			
			interval=setInterval(FadeInFadeOut,settings['interval']);
		}
		function FadeInFadeOut(){
			$slides.fadeOut("fast");
			incrementPosition();
			animateFadeInFadeOut();
			changeSlectedItem();
		}

		//incrementing the currentPosition
		function incrementPosition(){
			if(currentPosition == numberOfSlides-1){
				currentPosition = 0;
			}
			else{
				currentPosition++;
			}
		}

		//animation functions
		function animateLeftToRight(){
			$slidesContainer.animate({'margin-left': -currentPosition*width},settings['speed']);
		}
		function animateUpToDown(){
			$slidesContainer.animate({'margin-top': -currentPosition*height},settings['speed']);
		}
		function animateFadeInFadeOut(){
			$slides.eq(currentPosition).fadeIn(settings['speed']);
		}

		//changing the color of the selected item
		function changeSlectedItem(){
			$slideSelector.removeClass("selected-slide");
			$slideSelector.addClass("unselected-slide");
			$slideSelector.eq(currentPosition).addClass("selected-slide");
			$slideSelector.eq(currentPosition).removeClass("unselected-slide");

		}
		//enabling and disabling the left-right and up-down arrow
		function enableDisable(){
			if(settings['type'] == "up-down" || settings["type"] == "down-up")
			{
				if(currentPosition == 0){
					$('.move-icon-down').prop("disabled",true).css("opacity",'0');
				}else{
					$('.move-icon-down').prop("disabled",false).css("opacity",'1');
				}
				if(currentPosition == numberOfSlides-1){
					$('.move-icon-up').prop("disabled",true).css("opacity",'0');
				}else{
					$('.move-icon-up').prop("disabled",false).css("opacity",'1');
				}
			}
			if(settings['type'] == "left-right" || settings["type"] == "right-left")
			{
				if(currentPosition == 0){
					$('.move-icon-right').prop("disabled",true).css("opacity",'0');
				}else{
					$('.move-icon-right').prop("disabled",false).css("opacity",'1');
				}
				if(currentPosition == numberOfSlides-1){
					$('.move-icon-left').prop("disabled",true).css("opacity",'0');
				}else{
					$('.move-icon-left').prop("disabled",false).css("opacity",'1');
				}
			}
		}

		//clickable events for left-right and up-down
		$(document).on("click", ".move-icon", function(){
			
			clearInterval(interval);
			
			if($(this).hasClass("move-icon-right")){
				currentPosition--;
				animateLeftToRight();
				enableDisable();
				slideLeftToRight();

			}else if ($(this).hasClass("move-icon-left")){
				currentPosition++;
				animateLeftToRight();
				enableDisable();
				slideLeftToRight();

			}else if ($(this).hasClass("move-icon-up")){
				currentPosition++;
				animateUpToDown();
				enableDisable();
				slideUpToDown();
			}else if ($(this).hasClass("move-icon-down")){
				currentPosition--;
				animateUpToDown();
				enableDisable();
				slideUpToDown();
			}
			enableDisable();
			changeSlectedItem();

		});
		
		//clickable events for left-right and up-down
		$(document).on("click", ".slide-selector", function(){

			clearInterval(interval);
			var imageNo = $(this).attr("slide-no");
			currentPosition = parseInt(imageNo);
			if(settings['type'] == "left-right" || settings["type"] == "right-left"){
				animateLeftToRight();
				slideLeftToRight();
			}
			if(settings['type'] == "up-down" || settings['type'] == "down-up"){
				animateUpToDown();
				slideUpToDown();
			}
			if(settings['type'] == "fadein-fadeout"){
				$slides.fadeOut("fast");
				animateFadeInFadeOut();
				slideFadeInFadeOut();
			}
			enableDisable();
			changeSlectedItem();
		});

	}


})(jQuery);