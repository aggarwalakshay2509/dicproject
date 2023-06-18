let categ="Web Development";
let categID=categ.split(" ").join("");
showCourse();



let from=0;
let to=3;
let total=parseInt($("#"+categID).children(".categText").children(".numCourses").html().split(" ")[0]);
if(total<4){
    to=total-1;
}
visible()



$(".arrow").on("click", function () {
    hideCourse();
    categ=$(this).siblings(".categText").children(".categName").html();
    categID=categ.split(" ").join("");
    total=parseInt($("#"+categID).children(".categText").children(".numCourses").html().split(" ")[0]);
    from=0;to=3;
    if(total<4){
        to=total-1;
    }
    showCourse();
    visible();
});

function hideCourse(){
    $("#"+categID).css({"background-color":"#dff7ff","color":"black"})
    $(".selectedCategHead").html(categ);
}
function showCourse(){
    $("#"+categID).css({"background-color":"#e14177","color":"white"})
    $(".selectedCategHead").html(categ);
    //change courses according to database also
}


function slide(num){
    if(num===1){
        if(to>=total-1){
            return;
        }
        if(from>=0){
            $(".scrlLeft").hover(function(){
                $(this).css({"color":"#e14177"})
            },function(){
                $(this).css({"color":"grey"})
            })
        }
        from=from+2;
        to=to+2;
        if(to>=total-1){
            $(".scrlRight").hover(function(){
                $(this).css({"color":"grey"})
            })
        }
    }
    else{
        if(from<=0){
            return;
        }
        if(to<=total){
            $(".scrlRight").hover(function(){
                $(this).css({"color":"#e14177"})
            },function(){
                $(this).css({"color":"grey"})
            })
        }
        from=from-2;
        to=to-2;
        if(from<=0){
            $(".scrlLeft").hover(function(){
                $(this).css({"color":"grey"})
            })
        }
    }
    visible()
}

function visible(){
    if(from<0){
        for(let i=0;i<=to;i++){
            $("#c"+i).css("display","block");
        }
        for(let i=to+1;i<total;i++){
            $("#c"+i).css("display","none");
        }
    }
    else if(to>=total){
        for(let i=0;i<from;i++){
            $("#c"+i).css("display","none");
        }
        for(let i=from;i<total;i++){
            $("#c"+i).css("display","block");
        }
    }
    else{
        for(let i=0;i<from;i++){
            $("#c"+i).css("display","none");
        }
        for(let i=from;i<=to;i++){
            $("#c"+i).css("display","block");
        }
        for(let i=to+1;i<total;i++){
            $("#c"+i).css("display","none");
        }
    }
}