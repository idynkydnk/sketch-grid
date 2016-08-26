$(document).ready(function(){

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