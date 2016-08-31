$(document).ready(function(){

	userRows = 10;	// default rows
	newGrid(userRows);
	gridType = "default";

	$("#rainbowButton").click(function(){
		gridType = "rainbow";
		newGrid(userRows);
	});

	$("#gradientButton").click(function(){
		gridType = "gradient";
		newGrid(userRows);
	});

	$("#defaultButton").click(function(){
		gridType = "default";
		newGrid(userRows);
	});
});


function newGrid(numPerSide){
	$(".wrapper").empty();		// clears the wrapper div so the function doesn't keep building grid over grid

	if (numPerSide > 100 || numPerSide < 1){			// checks if the number of rows is too high or low.  Sets to default if it is.
		alert("Keep it between 1 and 100.");
		numPerSide = defaultSide;
	}

	for (i = 0; i < numPerSide * numPerSide; i++){				// gives each box it's own ID
		$(".wrapper").append("<div></div>").find("div:last").addClass("grid");
		$("div:last").attr("id", "box" + i);
	}

	$(".grid").width( $(".wrapper").width() / numPerSide);		// sets width and height of each box
	$(".grid").height( $(".wrapper").height() / numPerSide);

	$(".grid").mouseover(function(){
			
		if (gridType === "default"){	

			if ( $("#" + this.id).css("background-color") === "rgb(0, 0, 0)" ){

				$("#" + this.id).css("background-color","red");
			};
		} else if (gridType === "rainbow"){

			var randColor = makeRandomColor();
			$("#" + this.id).css("background-color",randColor);

		} else{     // grid type must be gradient here

			var hexColor = getBgColorHex($("#" + this.id));  
			hexColor = lighten(hexColor,0.1);
			$("#" + this.id).css("background-color",hexColor);
		}
	});
};

function formResults (form) {		// this is called from the html when the form is submitted
	userRows = form.userEnteredId.value;
	newGrid(userRows);
};

function lighten(color, luminosity) {

	color = new String(color).replace(/[^0-9a-f]/gi, '');			// validate hex string
	if (color.length < 6) {
		color = color[0]+ color[0]+ color[1]+ color[1]+ color[2]+ color[2];
	}
	luminosity = luminosity || 0;

	var newColor = "#", c, i, black = 0, white = 255;			// convert to decimal and change luminosity
	for (i = 0; i < 3; i++) {
		c = parseInt(color.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
		newColor += ("00"+c).substr(c.length);
	}
	return newColor; 
}

function getBgColorHex(elem){		// gets hex code of an element
    var color = elem.css('background-color')
    var hex;
    if(color.indexOf('#')>-1){		        //for IE
        hex = color;
    } else {
        var rgb = color.match(/\d+/g);
        hex = '#'+ ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
    }
    return hex;
}

function makeRandomColor(){
  var c = '';
  while (c.length < 6) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  return '#'+c;
}