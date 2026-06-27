//Task 1 - User Introduction

let Name = prompt("Enter your Name:")
let Age = prompt("Enter your Age:")

console.log("My name is " + Name)
console.log("I am " + Age + " years old")

//Task 2 - Degree Confirmation

let degree = confirm("Did you complete degree?")

if (degree){
    console.log("Degree Completed")
}
else{
    console.log("Degree Not Completed")
}

//Task 3 - Mobile Price

let mobilePrice = 15000;
let discount = 2000;

let finalPrice = mobilePrice - discount;

console.log("Final Price : " + finalPrice)

//Task 4 - Age Eligibility

let age = prompt("Enter your Age:")

if (age >= 18){
    console.log("Eligible for Vote")
}
else{
    console.log("Not Eligible")
}

//Task 5 - Shopping Cart

let cart = ["Rice","Milk","Sugar","Tea Powder"]

console.log("First Product: ", cart[0])
console.log("Last Product: ", cart[cart.length-1])
console.log("Total Products: ", cart.length)

//Task 6 - Student Details

let student = {
    name : "Prashanth",
    age : 24,
    course : "JavaScript"
}
console.log("Student Name:",student.name)
console.log("Student Course:",student.course)

//Task 7 - Employee Salary Calculator

let salary = 25000
let bonus = 5000

let totalSalary = salary + bonus 
console.log("Total Salary : ",totalSalary)

//Task 8 - Website Login Check

let username = "admin"
let password = "1234"

let inputUsername = prompt("Enter Username:")
let inputPassword = prompt("Enter Password:")

if (inputUsername === username && inputPassword === password) {
    console.log("Login Successful")
} else {
    console.log("Invalid Credentials")
}

//Task 9 - Food Delivery App

let foodPrice = 350
let deliveryCharge = 50

let totalBill = foodPrice + deliveryCharge
let gst = totalBill * 0.05;
let grandTotal = totalBill + gst;
console.log("Total Bill:", totalBill);
console.log("GST (5%):", gst);
console.log("Grand Total:", grandTotal);

//Task 10 - E-Commerce Product Details

let product = {
    name : "Laptop",
    price : 50000,
    brand : "ASUS",
    stock : true
}
console.log("Product Name: ",product.name)
console.log("Brand: ",product.brand)
console.log("Price ",product.price)
console.log("Stock Available:",product.stock)

// Task 11 - Attendance System

let present = confirm("Present?")

if(present){
    console.log("Attendance Marked")
}
else{
    console.log("Absent")
}

// Task 12 - Banking Application

let balance = Number(prompt("Enter Current Balance:"))
let withdraw = Number(prompt("Enter Withdraw Amount:"))

if (withdraw <= balance) {
    let remainingBalance = balance - withdraw
    console.log("Transaction Successful")
    console.log("Remaining Balance:", remainingBalance)
} else {
    console.log("Insufficient Balance")
}

//Build a Mini Employee Management System

let employee = {
    name: "Prashanth",
    age: 24,
    department: "IT",
    salary: 35000
}
console.log("Employee Name:", employee.name)
console.log("Employee Age:", employee.age)
console.log("Department:", employee.department)
console.log("Annual Salary:", employee.salary)

if (employee.salary > 30000) {
    console.log("Senior Employee")
} else {
    console.log("Junior Employee")
}