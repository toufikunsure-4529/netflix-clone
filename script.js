let newUserEmail=document.querySelector("#signup-email")
let signupBtn=document.querySelector("#signup-btn")
let errorMessage=document.querySelector(".msg")

signupBtn.addEventListener("click",validateEmail)
newUserEmail.addEventListener('input',validateEmail)

function validateEmail(){
  let email=newUserEmail.value
  if(email.trim()===''){
    errorMessage.textContent='Email is required';
  }
  else if(!email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )){
    errorMessage.textContent="Please enter a valid email address."
  }
  else{
    errorMessage.textContent='Email Validate'
  }
}