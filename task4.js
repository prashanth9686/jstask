// Task 1 - Company Welcome Function

function welcomeCompany(name){
    console.log("Welcome to " + name);
}
welcomeCompany("Stackly IT");


// Task 2 - Employee Details

function employeeDetails(name,department,salary){
    console.log("Employee Name: " + name);
    console.log("Employee Age: " + department);
    console.log("Employee Department: " + salary);
}
employeeDetails("Prashanth","Development",30000);

//  Task 3 - Calculate Bonus

function calculateBonus(salary, bonus){
    return salary +bonus;
}
console.log("Total Salary with Bonus: "+calculateBonus(35000,5000));

//  Task 4 - Student Result

function studentResult(marks){
    if(marks>=35){
        console.log("Student has passed the exam.");
    } else {
        console.log("Student has failed the exam.");
    }
}
studentResult(45);

// Task 5 - Return Employee Name

function getEmployeeName(name){
    var employeeName = name;
    return employeeName;
}
console.log("Employee Name: "+getEmployeeName("Mani"));


//  Task 6 - Product Price

var productPrice = function(price){
    var tax = price * 1.8;
    return price + tax;
}
console.log("Product Price: " + productPrice(1000));

//  Task 7 - Scope

function demo(){

    if(true){

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);

}

//Which variable prints?
console.log(a); // This will print 10 because 'a' is declared with var and has function scope.
//Which variables give an error?
console.log("b");
console.log("c");
// why
console.log("This will give an error because 'b' is declared with let and has block scope.");
console.log("This will give an error because 'c' is declared with const and has block scope."); 

// Task 8 - Hoisting

console.log(a);

var a = 100;
// Now check
// console.log(b);

// let b = 200;
// Explain the difference
console.log("The difference is that variables declared with var are hoisted to the top of their scope and initialized with undefined, while variables declared with let and const are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.");


// Task 9 - Named Function

function greet(name){
    console.log(name);
}
greet("Good Morning");

// Task 10 - Anonymous Function

var greet = function(name){
    console.log(name);
}
greet("Welcome Employee");

//  Task 11 - Arrow Function

var greet = (name) => {
    console.log(name);
}
greet("JavaScript Traing");

//  Task 12 - Return Function

function getCompanyName() {
    return "Stackly";
}

let company = getCompanyName();

console.log("Welcome " + company);

// Task 13 - Higher Order Function
function dashboard() {
    console.log("Dashboard Loaded");
}

function login() {
    console.log("Login Successful");
    dashboard(); // Calling Function 2 through Function 1
}

login();

// Task 14 - Callback Function
function deliver() {
    console.log("Delivered");
}

function processOrder() {
    console.log("Preparing Food");
    deliver(); // Calling Function 2 through Function 1
}
function recieved(){
    console.log("Order Recieved");
    processOrder(deliver);
}

recieved();

// Task 16 - Return + Generator
function* fruits() {
    yield "Apple";
    yield "Orange";
    yield "Banana";
}

const fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);

//  Task 17 - Currying
function discount(price) {
    return function (discountPercent) {
        let finalPrice = price - (price * discountPercent / 100);
        console.log("Final Price :", finalPrice);
    };
}

discount(1000)(10);


// Task 18 - Company Salary


function salary(baseSalary) {
    return function (bonus) {
        return function (allowances) {
            let totalSalary = baseSalary + bonus + allowances;
            console.log("Total Salary :", totalSalary);
        };
    };
}

salary(30000)(5000)(2000); 

// Task 19 - Real-Time Login System


function loadDashboard() {
    console.log("Load Dashboard");
}

function loginSuccessful() {
    console.log("Login Successful");
    loadDashboard();
}

function verifyPassword() {
    console.log("Verify Password");
    loginSuccessful();
}

function enterUsername() {
    console.log("Enter Username");
    verifyPassword();
}

enterUsername();



// Employee Salary Management System

// Employee Details
const employee = {
    id: 101,
    name: "Prashanth",
    department: "Development",
    salary: 35000
};

// Arrow Function
const welcome = () => {
    console.log("===== Welcome to Employee Salary Management System =====");
};
welcome();

// Anonymous Function
const showDepartment = function () {
    console.log("Department:", employee.department);
};
showDepartment();

// Display Employee Details
function displayEmployee() {
    console.log("\nEmployee Details");
    console.log("------------------------");
    console.log("ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Salary:", employee.salary);
}

// Calculate Salary + Bonus
function calculateSalary(salary, bonus) {
    return salary + bonus;
}

// Higher-Order Function
function login() {
    console.log("Login Successful");
    loadDashboard();
}

function loadDashboard() {
    console.log("Employee Dashboard Loaded");
}

login();

// Generator Function
function* bonusCoupons() {
    yield "BONUS100";
    yield "BONUS200";
    yield "BONUS300";
}

// Currying Function (Tax Calculation)
function tax(rate) {
    return function (salary) {
        return salary - (salary * rate / 100);
    };
}

// Execute Program
displayEmployee();

const bonus = 5000;
const totalSalary = calculateSalary(employee.salary, bonus);

console.log("\nBonus:", bonus);
console.log("Salary After Bonus:", totalSalary);

login(loadDashboard);

// Bonus Coupons
console.log("\nMonthly Bonus Coupons");
const coupon = bonusCoupons();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

// Tax Calculation
const calculateTax = tax(10);
const finalSalary = calculateTax(totalSalary);

// Final Report
console.log("\n===== Employee Report =====");
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Base Salary:", employee.salary);
console.log("Bonus:", bonus);
console.log("Salary After Bonus:", totalSalary);
console.log("Final Salary After Tax:", finalSalary);