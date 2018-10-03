var password = "dzik jest dziki";
password = password.toUpperCase();

var howManyMistakes = 0;

var password1 = "";

for (i = 0; i < password.length; i++) {

  if (password.charAt(i) === " ") {
  return password1 = password1 + " ";
  }
  else {
     return password1 = password1 + "-";
  }
}
