// Task 1 - Employee Login Eligibility 

let empAge = prompt("Enter your Age: ");
let empId = prompt("Enter your Employee ID: ");
let attendance = prompt("Enter your Attendence percentage: ");

if (empAge >= 18 && empId != "" && attendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//  Task 2 - Student Grade System 

let marks = prompt("Enter your marks: ")

if(marks >= 90 &&  marks <=100){
    console.log("Grade A+")
}
else if(marks >= 80 && marks <=89){
    console.log("Grade A")
}
else if(marks >= 70 && marks <=79){
    console.log("Grade B")
}
else if(marks >= 60 && marks <=69){
    console.log("Grade C")
}
else{
    console.log("Fail")
}

// Task 3 - ATM Withdrawal 

let Balance = 5000
let Withdraw = 3000

if(Withdraw <= Balance && Withdraw % 100 === 0){
    Balance = Balance - Withdraw
    console.log("Transaction Successful")
    console.log("Remaining Balance : " + Balance)
}
 else {
    console.log("Transaction Failed")
}

// Task 4 - Food Ordering App

let menu = Number(prompt("Enter the item you want from the list:\n1.Pizza\n2.Burger\n3.Shawarma\n4.Biryani\n5.Juice"));

switch(menu){
    case 1 :
        console.log("You Ordered Pizza");
        break;
    case 2 :
        console.log("You Ordered Burger");
        break;
    case 3 :
        console.log("You Ordered Shawarma");
        break;
    case 4 :
        console.log("You Ordered Biryani");
        break;
    case 5 :
        console.log("You Ordered Juice");
        break;
    default :
        console.log("Invalid order");

}


// Task 5 - E-Commerce Discount 

let purchase = Number(prompt("Enter Purchase Amount:"));


let discount = 0;
let finalPrice;
if (purchase > 5000) {
    discount = purchase * 0.20;
} else {
    discount = purchase * 0.10; 
}

finalPrice = purchase - discount;

console.log("Original Price: ₹" + purchase);
console.log("Discount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);

console.clear

// Task 6 - Attendance Report

for(i=1 ; i<=30 ; i++){
    console.log("Day " + i + " Present");
}

// Task 7 - Even Number Generator Concepts

for(i=1 ; i<=100; i++){
    if(i % 2 === 0){
    console.log(i);
    }
}

// Task 8 - Mobile Number Validation 

let mobile = prompt("Enter Mobile Number:");

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
     mobile.startsWith("7") ||
     mobile.startsWith("8") ||
     mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}

// Task 9 - Shopping Cart

let cart = [ "Milk","Bread","Egg","Rice","Oil"]

console.log("First Item: " + cart[0]);
console.log("Last Item: " + cart[cart.length-1]);
console.log("Total Items: " + cart.length);

// Task 10 - Employee Database

let employee = {
    name : prompt("Enter your name"),
    salary :prompt("Enter your salary"),
    department : prompt("Enter your department details"),
    experience : prompt("Enter your experience")
}
console.log("Name: " + employee.name);
console.log("Department: " + employee.department);
console.log("Experience: " + employee.experience);

// Task 11 - Company ID Generator

let empName = prompt("Enter your Name");
let empid = prompt("Enter your Employee ID");
let department = prompt("Enter your Department")

console.log("Welcome " + empName);
console.log("Your Employee ID is " + empid);
console.log("Department :" + department);

// Task 12 - User Registration

let empname = prompt("Enter Name");
let empage = prompt("Enter age")
let accept = confirm("Do you accept terms?");
if(accept){
    alert("Registration Sucessful");
}

// Task 13 - Salary Increment Calculator

 let oldSalary = Number(prompt("Enter salary"));
 let increment = Number(prompt("Enter increment in %"));
 let newIncrement = (oldSalary * increment)/100;
 let newSalary = oldSalary + newIncrement;
 console.log("Old Salary: " + oldSalary);
 console.log("Increment Amount: " + newIncrement);
 console.log("New Salary:" + newSalary);

 //  Task 14 - Restaurant Bill Generator

let burger = 150;
let pizza = 300;
let juice = 80;
let subTotal = burger + pizza + juice;
let gst = subTotal * 0.18;
let grandTotal = subTotal + gst;
console.log("Sub total: "+ subTotal);
console.log("Gst: " + gst);
console.log("Grant Total:" + grandTotal);

// Task 15 - Company Attendance Dashboard

let employees = {
    Rahul: "Present",
    Arun: "Absent",
    Kamal: "Present",
    Priya: "Present",
    Divya: "Absent"
};

let presentCount = 0;
let absentCount = 0;

console.log("Present Employees:");
for (let emp in employees) {
    if (employees[emp] === "Present") {
        console.log(emp);
        presentCount++;
    }
}

console.log("\nAbsent Employees:");
for (let emp in employees) {
    if (employees[emp] === "Absent") {
        console.log(emp);
        absentCount++;
    }
}
console.log("\nTotal Present: " + presentCount);
console.log("Total Absent: " + absentCount);

//  Mini Project (Team Assignment)
// Employee Management System (Console Version)

let employeeList = [
    { id: 1001, name: "Prashanth", salary: 30000, experience: 5 },
    { id: 1002, name: "Sushma", salary: 45000, experience: 2 },
    { id: 1003, name: "Ajay", salary: 40000, experience: 4 }
];

let option = Number(prompt(`
1. Add Employee
2. View Employees
3. Search Employee
4. Calculate Salary with Bonus
5. Check Experience
6. Delete Employee
7. Exit
Enter Choice:
`));

switch (option) {

    case 1:
        employeeList.push({
            id: Number(prompt("Enter ID")),
            name: prompt("Enter Name"),
            salary: Number(prompt("Enter Salary")),
            experience: Number(prompt("Enter Experience"))
        });
        console.log("Employee Added");
        break;

    case 2:
        console.log(employeeList);
        break;

    case 3:
        let searchId = Number(prompt("Enter Employee ID"));
        let found = employeeList.find(emp => emp.id === searchId);

        if (found) {
            console.log(found);
        } else {
            console.log("Employee Not Found");
        }
        break;

    case 4:
        employeeList.forEach(emp => {
            console.log(`${emp.name} Salary with Bonus : ${emp.salary + 5000}`);
        });
        break;

    case 5:
        employeeList.forEach(emp => {
            if (emp.experience >= 5) {
                console.log(`${emp.name} - Senior Employee`);
            } else {
                console.log(`${emp.name} - Junior Employee`);
            }
        });
        break;

    case 6:
        let deleteId = Number(prompt("Enter Employee ID to Delete"));
        employeeList = employeeList.filter(emp => emp.id !== deleteId);
        console.log("Employee Deleted");
        console.log(employeeList);
        break;

    case 7:
        console.log("Application Closed");
        break;

    default:
        console.log("Invalid Choice");
}