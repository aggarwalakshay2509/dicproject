$(".revContent").hover(function(){
    $(this).find("p").css("display","none");
    $(this).find("img").css("display","block");
},function(){
    $(this).find("p").css("display","block");
    $(this).find("img").css("display","none");
})