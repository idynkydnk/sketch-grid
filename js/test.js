$(document).ready(function(){

	defaultSide = 7;
	newGrid(defaultSide);

});

function formResults (form) {
	var TestVar = form.userEnteredId.value;
    newGrid(TestVar);

};


function newGrid(numPerSide){
	$(".wrapper").empty();		// clears the wrapper div so the function doesn't keep building grid over grid

	if (numPerSide > 50 || numPerSide < 1){			// checks if the number of rows is too high or low.  Sets to default if it is.
		alert("Keep it between 1 and 50.");
		numPerSide = defaultSide;
	}

	for (i = 0; i < numPerSide * numPerSide; i++){		
		$(".wrapper").append("<div></div>").find("div:last").addClass("grid");
		$("div:last").attr("id", "box" + i);
	}

	$(".grid").width($(".wrapper").width() / numPerSide - 2);
	$(".grid").height($(".wrapper").height() / numPerSide - 2);

	$(".grid").mouseover(function(){
			
			if ($("#" + this.id).css("background-color") === "rgb(0, 0, 0)"){
				$("#" + this.id).css("background-color","green");
			}else{
				$("#" + this.id).css("background-color","black");
			};
	});
};



/*

<input type="text" id="tbxEmail" name="Email" placeholder="Some Text"/>

$('#tbxEmail').attr('placeholder','Some New Text');


    var TestVar = form.userEntered.value;
    alert ("You typed: " + TestVar);

defaultSide = 7;
	newGrid(defaultSide);

	$("#buttonPress").click(function(){
		$(".wrapper").empty();
		var userNumPerSide = document.getElementById("formValue").value;
		if (userNumPerSide > 50 || userNumPerSide < 1){
			alert("Keep it between 1 and 50.");
			newGrid(defaultSide);
		}else{
			newGrid(userNumPerSide);
		}
	});


function newGrid(numPerSide){
	for (i = 0; i < numPerSide * numPerSide; i++){
		$(".wrapper").append("<div></div>").find("div:last").addClass("grid");
		$("div:last").attr("id", "box" + i);
	}

	$(".grid").width($(".wrapper").width() / numPerSide - 2);
	$(".grid").height($(".wrapper").height() / numPerSide - 2);

	$(".grid").mouseover(function(){
			
			if ($("#" + this.id).css("background-color") === "rgb(0, 0, 0)"){
				$("#" + this.id).css("background-color","green");
			}else{
				$("#" + this.id).css("background-color","black");
			};
	});
}
*/