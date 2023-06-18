$("#togglePassword").on('click',function(){
    let type=$("#password").attr("type");
    if(type==="password"){
        $("#password").attr("type","text");
    }else{
        $("#password").attr("type","password");
    }
    this.classList.toggle('fa-eye-slash');
})