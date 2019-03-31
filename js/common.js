$(function(){
	$(".iCont1 .iPros ul li:nth-child(4n)").addClass("last");
	$(".iAboutUs .iCont .iItem li:nth-child(3").addClass("last");

	$(".nav li.fa").hover(function(){
		$(this).find(".faBox").slideDown();
	},function(){
		$(this).find(".faBox").hide();
	});

	$(".searchArea .sIco").click(function(e){
		$(this).next(".sBox").show();
		e.stopPropagation();
	});
	$(".sBox").click(function(e){
		e.stopPropagation();
	});

	$(document).click(function(){
		$(".searchArea .sBox").hide();
	})
});




