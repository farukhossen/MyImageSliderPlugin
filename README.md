# Section 1: MyImageSliderPlugin
This is a very simple image slider plugin for the beginners.Code Structure is very simple and easy to understand.
#Section 2:How to use
There are 6 html files.If you go through all those you will get step by step ideas to use the plugin.
* Write the markup as described in **imageSlider.html** files.
* Item Call the plugin function like this **$(".slider).slideshow()**.
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
# Section 3:Adding CSS
You don't need add any css of your own.All you have to do is to use the **imageSlider.css** to get the plugin going.
#Section 4:Calling the plugin
        
        $(document).ready(function(){
            $(".slider").slideshow();	
        });
