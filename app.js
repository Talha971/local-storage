// // local storage main jab tk aap khud delete nhi karte data jab tk wou data delete nhi hota chahe aap bhale browser bnd kardo
// localStorage.setItem("name", "talha");
// // isko delete karne ke 2 tariqe hain pehla cross button daba dou or doosra neche dekho
// localStorage.clear();

// // session storage main data delete browser bnd hote hi hojata hai
// sessionStorage.setItem("lname", "tahir");

/////////////////////////////////////////////////Authetication flow////////////////////////////////////////////////////////
// alag alag pages bana lete hain sign in sign up ke liye

function signUp() {
  var suEmail = document.getElementById("suEmail").value;
  var suPass = document.getElementById("suPass").value;
  localStorage.setItem("Email: ", suEmail);
  localStorage.setItem("Password: ", suPass);
  location.href = "./signin.html";
}

function signIn() {
  var siEmail = document.getElementById("siEmail").value;
  var siPass = document.getElementById("siPass").value;
  if (
    localStorage.getItem("Email: ") == siEmail &&
    localStorage.getItem("Password: ") == siPass
  ) {
    location.href = "./welcome.html";
  } else {
    alert("Chal nikal");
    location.href = "./sign up.html";
  }
}



// logout hote hi dta delte hojata hai email or password
function logOutBtn() {
  localStorage.clear();
  location.href = "./signin.html";
}
