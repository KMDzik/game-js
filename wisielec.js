var password = "dzik jest dziki";
password = password.toUpperCase();

var howManyMistakes = 0;

var password1 = "";

for (i = 0; i < password.length; i++) {

  if (password.charAt(i) === " ") {
  password1 = password1 + " ";
  }
  else {
     password1 = password1 + "-";
  }
}


function setPassword()
{
	document.querySelector(".user-field").innerHTML = password1;
}

