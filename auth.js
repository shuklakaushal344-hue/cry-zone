function signup(){
  const phone = document.getElementById("phone").value;
  if(phone.length < 10){
    alert("Valid phone number dalo");
    return;
  }
  localStorage.setItem("user", phone);
  alert("Account created & logged in");
}

function login(){
  const phone = document.getElementById("phone").value;
  const saved = localStorage.getItem("user");
  if(phone === saved){
    alert("Login successful");
  } else {
    alert("Account nahi mila");
  }
}
