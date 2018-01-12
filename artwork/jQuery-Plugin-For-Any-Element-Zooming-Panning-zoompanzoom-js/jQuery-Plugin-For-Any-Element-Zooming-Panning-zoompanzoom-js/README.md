# Zoompanzoom---Light-weight-zooming-and-panning
Light weight zooming and panning Jquery plugin

Zoompanzoom is a lightweight jQuery plugin for Zooming and Panning different elemets like div , Image , SVG etc.

Dependant files - Jquery and Jquery UI

# How to use 

1. Create a div and assign an id 
2. Use the id to initialise the plugin 
 <code>
  $("#my_div").zoompanzoom();
 </code>


# Options
1.animationSpeed - possible values can be slow,normal,fast or any other number
<code>
$("#my_div").zoompanzoom({
		animationSpeed: "slow"  
	});
	</code>
	
2.zoomfactor - The factor by which the zoom out or zoom in will happen  <br>

default value - 0.1 <br>
3.maxZoom - maximum zoom <br>
default value - 3<br>
4.minZoom - Minimum zoom<br>
default value - 0.5<br>
5.disablePan - false to disable panning. Default value is true.<br>

Complete Example:
<pre>
$("#my_div").zoompanzoom({
    animationSpeed: "slow",
    zoomfactor: .8,
    maxZoom: 2.5,
    minZoom: 0.9,
    disablePan: false  
	});
</pre>
