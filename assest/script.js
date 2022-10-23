// Assignment code here
const copyEl = document.getElementById("copy");  
const lenEl = document.getElementById("length");  
const PwEl = document.getElementById("password");  
const lowerEl = document.getElementById("lower");  
const upperEl = document.getElementById("upper");  
 const symbolEl = document.getElementById("symbol");  
 const generateEl = document.getElementById("generate");  
 const numberEl = document.getElementById("number");  
 const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
 const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";  
 const numbers = "0123456789";  
 const symbol = "~!@#$%^&*()_+=|";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//   Lower and upper letters are  reserved
 function getLowercase() {  
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];  
 }  
 function getUppercase() {  
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];  
 }
 
// Assigned #'s to the password
 function getNumber() {  
  return numbers[Math.floor(Math.random() * numbers.length)];  
 } 
 
//  Assigned symbol's to the password
 function getSymbol() {  
  return symbol[Math.floor(Math.random() * symbol.length)];  
 } 
 
//  Generate Password Function 
 function generatePassword() {  
  const len = lenEl.value;  
  let password = "";  
  for (let i = 0; i < len; i++) {  
   const x = generateX();  
   password += x;  
  }  
  PwEl.innerText = password;  
 }  
 function generateX() {  
  const xs = [];  
  if (upperEl.checked) {  
   xs.push(getUppercase());  
  }  
  if (lowerEl.checked) {  
   xs.push(getLowercase());  
  }  
  if (numberEl.checked) {  
   xs.push(getNumber());  
  }  
  if (symbolEl.checked) {  
   xs.push(getSymbol());  
  }  
  if (xs.length === 0) return "";  
  return xs[Math.floor(Math.random() * xs.length)];  
 }  

//  Add event listener to generate button
 generateEl.addEventListener("click", generatePassword);  
 copyEl.addEventListener("click", () => {  
  const textarea = document.createElement("textarea");  
  const password = PwEl.innerText;  
  if (!password) {  
   return;  
  }  
  textarea.value = password;  
  document.body.appendChild(textarea);  
  textarea.select();  
  document.execCommand("copy");  
  textarea.remove(); 
  
  // Alert to let user know password was copied
  alert("Copying the password to the clipboard");  
 });  

