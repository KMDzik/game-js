var passwords = [
  "dzik",
  "happy",
  "developerem",
  "działa"
];

var password = passwords[Math.floor(Math.random() * passwords.length)];

var answers = [];
for (i = 0; i < password.length; i++) {
  answers[i] = "_";
};

var restCharacters = password.length;
