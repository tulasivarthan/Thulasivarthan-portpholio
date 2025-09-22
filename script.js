// Save user data
function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if(user && pass){
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    alert("Registration successful!");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields!");
  }
}

// Login check
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if(user === storedUser && pass === storedPass){
    alert("Login successful!");
    localStorage.setItem("loggedInUser", user);
    window.location.href = "profile.html";
  } else {
    alert("Invalid credentials!");
  }
}

// Show profile user
window.onload = function() {
  let profileUser = document.getElementById("profileUser");
  if(profileUser){
    profileUser.innerText = localStorage.getItem("loggedInUser");
  }
}

// Logout
function logout(){
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
