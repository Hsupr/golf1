
// Create canvas variable
var canvas=new fabric.Canvas("myCanvas");

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png" ,function(Img){
		ball_obg=Img;
		ball_obg.scaleToWidth(50)
		ball_obg.scaleToHeight(50)
		ball_obg.set({
			top:ball_x,
			left:ball_y
		});
		canvas.add(hole_obj);
	});
		// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
	ball_obg=Img;
	ball_obg=scaleToHeight(50);
	ball_obg=scaleToWidth(50);
	ball_obg.set({
		top:ball_x,
		left:ball_y
	});
	canvas.add(ball_obj);
	});
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((ball_x==ball_x)&&(ball_y==ball_y)) {
		canvas.remove(ball_obg);
		document.getElementById("hd3").innerHTML="You have hit the goal!!!"
		document.getElementById("myCanvas").style.borderColor="red";
	}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball<=450) {
			ball_y=ball_y+block_image_height;{
				console.log("block image height ="+block_image_height);
				console.log("When up arrow key pressed ,X="+ball_x+",Y="+ball_y);
				canvas.remove(ball_obg);
				new_image();
			}
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if (ball<=450) {
			ball_y=ball_y+block_image_height;{
				console.log("block image height ="+block_image_height);
				console.log("When Down arrow key pressed ,X="+ball_x+",Y="+ball_y);
				canvas.remove(ball_obg);
				new_image();
			}
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y=ball_y+block_image_height;{
				console.log("block image height ="+block_image_height);
				console.log("When up arrow key pressed ,X="+ball_x+",Y="+ball_y);
				canvas.remove(ball_obg);
				new_image();
			}
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y=ball_y+block_image_height;{
				console.log("block image height ="+block_image_height);
				console.log("When up arrow key pressed ,X="+ball_x+",Y="+ball_y);
				canvas.remove(ball_obg);
				new_image();
			}
			// Write a code to move ball right side.
		}
	}
	
}

