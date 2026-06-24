// // Task 1 - Employee Name

let a = prompt("Enter your name:");

console.log(a);

document.writeln("Welcome " + a);

// Task 2 - Company Entry Confirmation

let b = confirm("Are you ready to join today's JavaScript training?");

console.log(b);


// Task 3 - Customer Greeting

alert("Welcome to Stackly Solutions!");

console.log("Customer entered the website.");


// Task 4 - Student Details

let c = prompt("Enter your name:");
let d = prompt("Enter your age:");

console.log(c);
console.log(d);

// Task 5 - Product Price

let productPrice = 500;
productPrice = 750;
console.log("Updated Product Price:", productPrice);


// Task 6 - Login Validation

let e = prompt("Enter your username:");

if (e === "") {
    console.warn("Username cannot be empty.");
} else {
    console.log("Login Successful: " + e);
}

// Task 7 - Website Maintenance

alert("Website is under maintenance.");

console.error("Website is currently unavailable.");


// Task 8 - Feedback Collection

let f = prompt("How was today's JavaScript session?");

console.log(f);

document.writeln("Thank you for your feedback!");

// Task 9 - Profile Information

let g = prompt("Enter your name:");
let h = prompt("Enter your city:");
let i = prompt("Enter your favorite programming language:");

console.log(g);
console.log(h);
console.log(i);

// Task 10 - Mini Registration Form

let j = prompt("Enter your full name:");
let k = prompt("Enter your email:");
let l = prompt("Enter your mobile number:");

console.log("===== Registration Details =====");
console.log("Name   : " + j);
console.log("Email  : " + k);
console.log("Mobile : " + l);

alert("Registration Successful!");