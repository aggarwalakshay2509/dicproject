let p=[30,60,90]
for(let i=0;i<p.length;i++){
    $(".bar"+i).css("width",p[i]+"%");
    $(".percent"+i).html(p[i]+"%");
}

$(".viewstu").on("click",function(){
    if($(this).css("background-color")=="rgb(232, 232, 232)"){
        $(this).css({"background-color":"white","color":"black","border-top":"0.5px solid black","border-left":"0.5px solid black","border-right":"0.5px solid black","border-bottom":"0px"});
        if(this.id=="com"){
            $("#on").css({"background-color":"rgb(232, 232, 232)","color":"grey","border-top":"0px","border-left":"0px","border-right":"0px","border-bottom":"3px solid black"});
            $(".ongoingList").css("display","none");
            $(".completedList").css("display","flex");
        }else if(this.id=="on"){
            $("#com").css({"background-color":"rgb(232, 232, 232)","color":"grey","border-top":"0px","border-left":"0px","border-right":"0px","border-bottom":"3px solid black"});
            $(".ongoingList").css("display","flex");
            $(".completedList").css("display","none");
        }
    }
})