let email=document.getElementById("Email");
let pwd1=document.getElementById("Password1");
function validateLogin(){
    
    if(email.value.trim()==""||pwd1.value.trim()=="")
    {
        alert("Fields can not be empty");
        return false;
    }
    else{
        ValidateEmail(email);
        CheckPassword(pwd1);
    }
    

}
function CheckPassword(pwd) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(pwd.value.match(passw)) 
{ 
alert('Correct, try another password...')
return true;
}
else
{ 
alert('Wrong password...!')
return false;
}
}
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
// document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
// document.form1.text1.focus();
return false;
}
}
