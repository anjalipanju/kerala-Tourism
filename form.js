let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("Email");
let pwd1=document.getElementById("Password1");
let pwd2=document.getElementById("Password2");
let mobileno=document.getElementById("mobileno");


function validate(){
    
    if(fname.value.trim()==""||lname.value==""||email.value==""||pwd1.value==""||pwd2.value==""||mobileno.value=="")
    {
        alert("Fields can not be empty");
        return false;
    }
    else{
        phonenumber(mobileno);
        ValidateEmail(email);
        CheckPassword(pwd1);
        CheckPassword(pwd2);
    }
    

}
function phonenumber(mbno)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(mbno.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("no is invalid");
        return false;
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

    
