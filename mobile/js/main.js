$(function () {

	// 底部footertab切换
	$(".tab-item").on('click', function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	// tab选项卡切换
	$(".tab-head-item").click(function(){
		$(this).addClass("active").siblings().removeClass('active');
		$(this).parent(".bar-tab-head").next().children(".tab-body-item").hide().eq($(this).index()).show();
	});

	//左边抽屉
	$("#slider-left").click(function(){
		var width = $(window).width();
		$(".mask-layer").show();
		$("#slider-left-content .slider-content").animate({width:width*0.8},500);
		$(".page").children().animate({'margin-left':width*0.8},500);
	});
	
	//右边抽屉
	$("#slider-right").click(function(){
		var width = $(window).width();
		$(".mask-layer").show();
		$("#slider-right-content .slider-content").animate({width:width*0.8},500);
		$(".page").children().animate({'margin-left':-width*0.8},500);
	});

	//抽屉遮罩层
	$(".mask-layer").click(function(){
		$(".mask-layer").hide();
		$("#slider-left-content div").animate({width:0},500);
		$(".page").children().animate({'margin-left':0},500);
		$("#slider-right-content div").animate({width:0},500);
		$(".page").children().animate({'margin-right':0},500);
	});

	//右上角下拉
	$("#nav-toggle").click(function(){
		$("#nav-toggle-content").show();
		$(".mask-layer").show();
	});
	$(document).bind("click",function(e){

        var target  = $(e.target);

        if(target.closest("#nav-toggle-content,#nav-toggle").length == 0){   
            $("#nav-toggle-content").hide();
        };
        // 阻止冒泡
        e.stopPropagation();  
    });


})