import { useState } from "react";

interface validationProps{
    name:string;
    pass:string;
  }

export default function Handle({name,pass}:validationProps){
  
    let message : string = "";
    function hasLowerCase(str:string) {
        for(let x=0;x<str.length;x++)
            if(str.charAt(x) >= 'a' && str.charAt(x) <= 'z')
                return true;
        return false;
    }
    function hasUpperCase(str:string) {
        for(let x=0;x<str.length;x++)
            if(str.charAt(x) >= 'A' && str.charAt(x) <= 'Z')
                return true;
        return false;
    }
   
    const requiredLength = {
        usermin: 3,
        usermax: 10,
        pwmin: 6,
        pwmax: 8,
      };
    let cond1 = /^(?=.*[@$!%#?&])[A-Za-z\d@$!%?&]{6,8}$/; // Check password has special char.
    let cond2 = /^(?=.*\d)[A-Za-z\d@$!%?&]{6,8}$/; // check password for number is present or not
    let cond3 = /[!@#$%\^&*)(+=_]/; //check username for special characters
    let cond4 = /[A-Za-z]/; //check for alphabets in username

    let hasSpecialChar: boolean = pass.match(cond1)? true : false;
    console.log(hasSpecialChar);

    let hasNumber: boolean = pass.match(cond2) ? true : false;
    console.log(hasNumber);

    let userSpecial: boolean = name.match(cond3) ? true : false;
    console.log(userSpecial);

    let hasAlpha: boolean = pass.match(cond4) ? true : false;
    console.log(hasAlpha);
    let hasLowerCaps =hasLowerCase(pass);
    let hasUpperCaps = hasUpperCase(pass);
  
     
    if (name === "" && pass === "") {
      // alert("fields cannot be empty");
      message = "fields cannot be empty";
      return message;
    }

    if (name === "") {
      // alert("username is required");
      message = "username is required";
      return message ;
    }
    
    if (userSpecial === true) {
      // alert("Username should have no special characters");
      message = "Username should have no special characters";
      return message;
    }
    if (pass === "") {
   
      // alert("password is required field");
      message = "password is required field";
      return message;
    } 
    else if (name !== "" && pass !== "") {
      
    if (name.length > requiredLength.usermax) {
        // alert("Maximum characters for username is 10");
        message = "Maximum characters for username is 10";
        return message;
    }
    if (name.length < requiredLength.usermin) {
        // alert("Minimum Character for username is 3");
        message = "Minimum Character for username is 3";
        return message;
    }
    if (pass.length < requiredLength.pwmin) {
        // alert("Minimum Character for password is 6");
        message = "Minimum Character for password is 6";
        return message;
    }
    if (pass.length > requiredLength.pwmax) {
        // alert("Maximum Character for password is 8");
        message = "Maximum Character for password is 8";
        return message;
    }
    if (hasAlpha === false) {
      // alert("password should have one character");
      message = "password should have one character";
      return message;
    }
    if (hasSpecialChar === false) {
        // alert("password should have one special character");
        message = "password should have one special character";
        return message;
    }
    if (hasNumber === false) {
        // alert("password should have at least one number");
        message = "password should have at least one number";
        return message;
    }
    if(hasLowerCaps === false){
      // alert("password should have lower case letters");
      message = "password should have lower case letters";
      return message;
    }
    if(hasUpperCaps === false){
        // alert("password should have upper case letters");
        message = "password should have upper case letters";
        return message;
    }
    else{
        message = "Data is valid";
        return message;
    }
   
    
  }
 
return message;
}