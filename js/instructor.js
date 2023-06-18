$(".jsStep").on("click",function(){
    let num=this.id.slice(-1);
    let id="#todo"+num;
    let arrow=".updown"+num;
    if($(id).css("display")==="block"){
        $(id).css("display","none");
        $(arrow).removeClass("fa-angle-up")
        $(arrow).addClass("fa-angle-down")
    }else{
        $(id).css("display","block")
        $(arrow).removeClass("fa-angle-down")
        $(arrow).addClass("fa-angle-up")
    }
})