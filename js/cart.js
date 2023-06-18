$(".delCourseBtn").on("click",function(e){
    let id=$(this).parent().parent()[0].id;
    $("#"+id).remove();
})