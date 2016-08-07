$(document).ready(function() {
	$("#menu-bar").click(function(){
		$(".nav-items").stop().fadeToggle();
		$("#menu-bar").toggleClass("rotate");
	});
});