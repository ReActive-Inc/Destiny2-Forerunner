// JavaScript Document


    $(document).ready(function() {
        $('.answer').hide(); //hide all of the answers
        $('#mapmenu h3').click(function() {
                        $(this).next('.answer').slideToggle();
        }); //end click
		
		//preload the image
		var homeImage = new Image();
		homeImage.src = "images/destiny-2-leviathan-raid.png";

		//get the current image src so we can use it in the mouseout. 
		var oldHomeSrc = $('#chest').attr('src');

		$('#chest').hover(
			  function() {
					$(this).attr('src', homeImage.src);
			  }, 
			  function() {
					$(this).attr('src', oldHomeSrc);
			  }
		);//end preload the image 
			//image transition
			$('#content').hover(function() {
			$("#content").addClass('transition');

			}, function() {
				$("#content").removeClass('transition');
			});//end transition
		$('#answerhover').hover(
			function() {
				$('#chest').attr('src', homeImage.src);
			}, 
			function() {
				$('#chest').attr('src', oldHomeSrc);
			});// end answer hover 		
    }); //end document ready

	$(document).ready(function() {
var canvas		= document.getElementById("canvas");
var context		= canvas.getContext("2d");
canvas.width	= 440;
canvas.height	= 400;

var global = {
  scale	: 1,
  offset	: {
    x : 0,
    y : 0,
  },
};
var pan = {
  start : {
    x : null,
    y : null,
  },
  offset : {
    x : 0,
    y : 0,
  },
};

function draw() {
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.translate(pan.offset.x, pan.offset.y);

  context.beginPath();
  context.rect(50, 50, 100, 100);
  context.fillStyle = 'skyblue';
  context.fill();

  context.beginPath();
  context.arc(350, 250, 50, 0, 2 * Math.PI, false);
  context.fillStyle = 'red';
  context.fill();
}

draw();

canvas.addEventListener("mousedown", startPan);
canvas.addEventListener("mouseleave", endPan);
canvas.addEventListener("mouseup", endPan);

function startPan(e) {
  canvas.addEventListener("mousemove", trackMouse);
  canvas.addEventListener("mousemove", draw);
  pan.start.x = e.clientX;
  pan.start.y = e.clientY;
}

function endPan(e) {
  canvas.removeEventListener("mousemove", trackMouse);
  pan.start.x = null;
  pan.start.y = null;
  global.offset.x = pan.offset.x;
  global.offset.y = pan.offset.y;
}

function trackMouse(e) {
  var offsetX	 = e.clientX - pan.start.x;
  var offsetY	 = e.clientY - pan.start.y;
  pan.offset.x = global.offset.x + offsetX;
  pan.offset.y = global.offset.y + offsetY;
}
		    }); //end document ready
