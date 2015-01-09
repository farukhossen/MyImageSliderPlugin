# Section 1: MyImageSliderPlugin
This is a very simple image slider plugin for the beginners.Code Structure is very simple and easy to understand.
#Section 2:How to use
There are 6 html files.If you go through all those you will get step by step ideas to use the plugin.
* Write the markup as described in **imageSlider.html** files.
* Call the plugin function like this **$(".slider).slideshow()**.
* To to put options use curly brace and put your options.  **$(".slider).slideshow({//options go here})**
  
# Section 3:Basic Markup
          <div class="slider">
          		<div class="slidesContainer">
          			<div class="slide">
          				<img src="images/slide1.jpg"/>
          			</div>
          			<div class="slide">
          				<img src="images/slide2.jpg"/>
          			</div>
          			<div class="slide">
          				<img src="images/slide3.jpg"/>
          			</div>
          			<div class="slide">
          				<img src="images/slide4.jpg"/>
          			</div>
          			<div class="slide">
          				<img src="images/slide5.jpg"/>
          			</div>
          			<div class="slide">
          				<img src="images/slide6.jpg"/>
          			</div>
          			<div class="slide">
          				<img src="images/slide7.jpg"/>
          			</div>
          			
          		</div>
          		
          	</div>
# Section 4:Adding CSS
You don't need add any css of your own.All you have to do is to use the **imageSlider.css** to get the plugin going.
#Section 5:Calling the plugin
        
        $(document).ready(function(){
            $(".slider").slideshow();	
        });
#Section 6:Options
There are five options-
* **type**(type can be fadein-fadeout,left-right,up-down)//by default type is fadein-fadeout
* **speed**(animation speed in ms)
* **interval**(sliding interval that is how often slider slides in ms)
* **clikable**(whether user can change the slide by clicking left-right and up-down arrows)(true/false)
* **slide-selectable**(whether user is interested to see the buttons under the slideshow)(true/false)


#Section 7:How to Use Options

$(document).ready(function(){
		$(".slider").slideshow(
			{
				'type':'left-right',
				'speed':1000,
				'interval':5000,
				'clickable':true,
				'slide-selectable':false
			}
		);	
		
});

#Section 8:Better UnderStanding
For better understanding run the 6  html files-
* imageSlider1.html (basic fadein-fadeout slider)
* imageSlider2.html (baseic fadein-fadeout slider speed and interval is changed)
* imageSlider3.html (left-right slider)
* imageSlider4.html (left-right slider with left-right arrows)
* imageSlider5.html (left-right slider without slide-slectable below the slider)
* imageSlider6.html (up-down slider with all options.
Play with all these files and understand
