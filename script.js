const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
const lowercase = document.querySelector('#lowCheck');
const uppercase = document.querySelector('#upCheck');
const specialcase = document.querySelector('#spCheck');
const numbercase = document.querySelector('#numCheck');
let passwordLength = document.querySelector('#passwordLength');
let savedList = []

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChar = lowercaseChar.toUpperCase();
    let numberChar = "0123456789";
    let specialSymbols = "!@#$%^&*()_+/-.,;''[]{}|><";
    let workingString = "";

    //Criteria 1- Password Length 
    if (passwordLength.value <8 || passwordLength.value >128) {
        alert("Invalid! Your password MUST have a length between 8 and 128.");
        return ;
    }else if (passwordLength.value == NaN) {
        alert("Invalid! Your password MUST have a length between 8 and 128.");
        return ;
    }
    
    //Criteria 2 - CheckBox
    if (!lowercase.checked && !uppercase.checked && !specialcase.checked && !numbercase.checked) {
        alert("None of the boxes were checked. Please start again!!!")
        return;
    }
    if (lowercase.checked){
        workingString += lowercaseChar;
    } 

    if (uppercase.checked) {
        workingString += uppercaseChar;
    } 

    if (specialcase.checked) {
        workingString += specialSymbols;
    } 

    if (numbercase.checked) {
        workingString += numberChar;
    }


    var finalString = "";
    for (var i = 0; i < passwordLength.value; i++){
        finalString = finalString + workingString.charAt(Math.floor(Math.random() * workingString.length));
    }
    passwordText.value = finalString;

}