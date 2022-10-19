function myFunction(){
    var username = document.getElementById("username");
    var email=document.getElementById("email");
    var field1= document.getElementById("field1");
    var field2= document.getElementById("field2");
    field1.innerHTML="Please enter your name";
    field2.innerHTML="Please enter your Email";
    field1.style.color = "red";
    field2.style.color = "red";

    username.style.border = "1px red solid";
    email.style.border = "1px red solid";
}
