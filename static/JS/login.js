function sin()
{
  var x = document.getElementById('sin');
  var y = document.getElementById('sup');
  var form = document.getElementById("form");
  var container = document.getElementById('cnt');

  var tag = document.getElementById('warntag')

  tag.innerHTML = ''

  container.style.height = "400px";

  try{
    var supname = document.getElementById("supname");
    supname.parentNode.removeChild(supname)

    var email = document.getElementById("supemailid");
    email.parentNode.removeChild(email)

    var suppass = document.getElementById("suppass");
    suppass.parentNode.removeChild(suppass)

    var supcpass = document.getElementById("supcpass");
    supcpass.parentNode.removeChild(supcpass)

    var sub = document.getElementById("sub_but");
    sub.parentNode.removeChild(sub)

  }
  catch(err){}

  try
  {
    var name = document.getElementById("u_name");
    name.parentNode.removeChild(u_name)

    var pass = document.getElementById("u_pass");
    pass.parentNode.removeChild(pass)

    var sub = document.getElementById("sub_but");
    sub.parentNode.removeChild(sub)
  }
  catch(err){}

  var pass = document.createElement("INPUT");   
  pass.setAttribute("id","u_name");
  pass.setAttribute("placeholder","Enter Emailid...");
  pass.setAttribute("name","user_name");
  form.appendChild(pass);


  var pass = document.createElement("INPUT");   
  pass.setAttribute("id","u_pass");
  pass.setAttribute("placeholder","Enter Password...");
  pass.setAttribute("type","password");
  pass.setAttribute("name","user_pass");
  form.appendChild(pass);   


  var btn = document.createElement("BUTTON");   
  btn.innerHTML = "Submit"; 
  btn.setAttribute("id","sub_but");
  btn.setAttribute("onclick","sinvalidate()");
  form.appendChild(btn); 
     
             
  x.style.fontSize = "35px";
  x.style.textShadow = "1px 1px 2px black";
  x.style.color = "red";
  y.style.fontSize = "15px";
  y.style.textShadow = "none";
  y.style.color = "black";


}








function sup()
{
  var x = document.getElementById('sin');
  var y = document.getElementById('sup');
  var form = document.getElementById("form");
  var container = document.getElementById('cnt');

  var tag = document.getElementById('sin_warntag')

  tag.innerHTML = ""


  container.style.height = "520px";

  try
  {
    var name = document.getElementById("u_name");
    name.parentNode.removeChild(name)

    var pass = document.getElementById("u_pass");
    pass.parentNode.removeChild(pass)

    var sub = document.getElementById("sub_but");
    sub.parentNode.removeChild(sub)
  }
  catch(err){}

  try
  {
    var supname = document.getElementById("supname");
    supname.parentNode.removeChild(supname)

    var email = document.getElementById("supemailid");
    email.parentNode.removeChild(email)

    var suppass = document.getElementById("suppass");
    suppass.parentNode.removeChild(suppass)

    var supcpass = document.getElementById("supcpass");
    supcpass.parentNode.removeChild(supcpass)

    var sub = document.getElementById("sub_but");
    sub.parentNode.removeChild(sub)

  }
  catch(err){}

  var u_name = document.createElement("INPUT"); 
  u_name.setAttribute("placeholder","Enter Username...");
  u_name.setAttribute("id","supname");
  u_name.setAttribute("name","sup_user_name");
  form.appendChild(u_name);

  var email = document.createElement("INPUT");   
  email.setAttribute("placeholder","Enter Email id...");
  email.setAttribute("id","supemailid");
  email.setAttribute("name","sup_emailid");
  form.appendChild(email);

  var pass = document.createElement("INPUT");   
  pass.setAttribute("placeholder","Enter Password...");
  pass.setAttribute("id","suppass");
  pass.setAttribute("name","sup_pass");
  pass.setAttribute("type","password");
  form.appendChild(pass);

  var cpass = document.createElement("INPUT");   
  cpass.setAttribute("placeholder","Confirm Password...");
  cpass.setAttribute("type","password");
  cpass.setAttribute("id","supcpass");
  cpass.setAttribute("name","sup_cpass");
  form.appendChild(cpass);


  var btn = document.createElement("BUTTON");   
  btn.innerHTML = "Submit"; 
  btn.setAttribute("id","sub_but");
  btn.setAttribute("onclick","validate()");
  form.appendChild(btn); 


  x.style.fontSize = "15px";
  x.style.textShadow = "none";
  x.style.color = "black";
  y.style.fontSize = "35px";
  y.style.textShadow = "1px 1px 2px black";
  y.style.color = "red";


}


function validate() 
{
 var supname = document.getElementById('supname').value;
 var email = document.getElementById('supemailid').value;
 var pass = document.getElementById('suppass').value;
 var cpass = document.getElementById('supcpass').value;
 var tag = document.getElementById('warntag')
 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 var pformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

 if (supname.length < 7) 
 {
    tag.innerHTML = "Username should have atleast 8 chars";
    sup()
    document.getElementById('supname').style.boxShadow = "0 0 0 2px red"
 
 }
 else if (reg.test(email) == false)
 {
   tag.innerHTML = "Invalid Email id";
   sup()
   document.getElementById('supemailid').style.boxShadow = "0 0 0 2px red"
   document.getElementById('supname').value = supname
 }
 else if (pformat.test(pass) == false)
 {
  tag.innerHTML = "Password must contain one uppercase letter one lowercase letter and one number atleast";
  sup()
  document.getElementById('supname').value = supname
  document.getElementById('supemailid').value = email
  document.getElementById('suppass').style.boxShadow = "0 0 0 2px red"
 }
 else if (pass !== cpass)
 {
  tag.innerHTML = "Passwords do not match";
  sup()
  document.getElementById('supname').value = supname
  document.getElementById('supemailid').value = email
  document.getElementById('suppass').style.boxShadow = "0 0 0 2px red"
  document.getElementById('supcpass').style.boxShadow = "0 0 0 2px red"
 }

}


function sinvalidate()
{
  var tag = document.getElementById('sin_warntag')
  var sin_email = document.getElementById('u_name').value;
  var sin_pass = document.getElementById('u_pass').value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var pformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
  if (reg.test(sin_email) == false)
  {
    tag.innerHTML = "Invalid Email id";
    sin()
    document.getElementById('u_name').style.boxShadow = "0 0 0 2px red"
  }
  else if (pformat.test(sin_pass) == false)
  {
    tag.innerHTML = "Invalid Password";
    sin()
    document.getElementById('u_name').value = sin_email
    document.getElementById('u_pass').style.boxShadow = "0 0 0 2px red"
  }
}
