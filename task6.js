// Task 1 - Employee Bonus (Spread Operator)

let employee = {
    name: "Naveen",
    salary: 35000
};

let employeeWithBonus = {
    ...employee,
    bonus: 5000,
    department: "Developer"
};

console.log(employeeWithBonus);

// Task 2 - Shopping Cart (Rest Operator)

function calculateBill(...prices) {

    let total = 0;
    for (let price of prices) {
        total += price;
    }
      console.log("Items :", prices.length);
      console.log("Total :", total);
}

calculateBill(10, 20, 30, 40);

// Task 3 - Student Details (Object Destructuring)

let student = {
    name:"Rahul",
    age:22,
    courses:"MERN",
    city:"Chennai"
};

let { name, age, courses, city } = student;

console.log(name);
console.log(age);
console.log(courses);
console.log(city);

// Task 4 - Online Food Order

let foods=[
"Pizza",
"Burger",
"Fries"
]
foods.push("coke");
foods.push("Ice-cream");
foods.splice(2,1);
console.log(foods);

// Task 5 - Bank Transactions

let transactions=[1000,2000,3000,4000]
transactions.shift();
transactions.unshift(500);
console.log(transactions);

// Task 6 - Company Departments

let dept1=["HR","Sales"]
let dept2=["Developer","Testing"]

let departments = dept1.concat(dept2);
console.log(departments);

// Task 7 - Product Search

let products=[
"Laptop",
"Mouse",
"Keyboard",
"Monitor"
]
if (products.includes("Keyboard")) {
    console.log("Available");
} else {
    console.log("Not Available");
}

// Task 8 - User Login (Callback Function)

function login(callback) {
    console.log("Login Success");
    callback();
}

function dashboard() {
    console.log("Dashboard Opened");
}

login(dashboard);

// Task 9 - Coupon Generator (Generator Function)

let coupons = [
    "WELCOME10",
    "SAVE20",
    "MEGA50",
    "FREE100"
];

let coup = coupons.values();
console.log(coup.next().value);
console.log(coup.next().value);
console.log(coup.next().value);
console.log(coup.next().value);

// Task 10 - Course Registration (Currying)

function course(courseName) {
    return function (batch) {
        return function (room) {
            console.log("Course :", courseName);
            console.log("Batch :", batch);
            console.log("Room :", room);
        };
    }
}
course("JavaScript")("Morning")("Batch-36");

// Task 11 - Movie Collection

let movies=[
"Leo",
"GOAT",
"Dragon",
"Retro",
"Coolie"
]

let result = movies.slice(2, 4);

console.log(result);

// Task 12 - Employee IDs

let ids=[101,102,103,104,105]
ids.splice(2, 2, 501, 502);

console.log(ids);

// Task 13 - Sort Product Prices

let price = [
    5000,
    250,
    700,
    12000,
    50
];

price.sort((a, b) => a - b);
console.log(price);

// Task 14 - Nested Categories

let data = [
    "Electronics",
    [
        "Mobiles",
        [
            "Samsung",
            "Apple"
        ]
    ]
];
let [category, [subCategory, [brand1, brand2]]] = data;

console.log(category);
console.log(subCategory);
console.log(brand1);
console.log(brand2);

// Task 15 - Company Team

let developers = [
    "John",
    "David"
];

let designers = [
    "Ram",
    "Kiran"
];

let employees = [...developers, ...designers];

console.log(employees);

// Task 16 - Return Function

function calculateSalary(salary, bonus) {
    return salary + bonus;
}
let totalSalary = calculateSalary(45000, 5000);
console.log(totalSalary);

// Task 17 - Scope Checking

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a);
console.log(b); // Error
console.log(c); // Error

// Task 18 - Customer Orders

let orders = [
    "Pizza",
    "Burger",
    "Pizza",
    "Sandwich",
    "Pizza"
];
console.log("First Index :", orders.indexOf("Pizza"));
console.log("Last Index :", orders.lastIndexOf("Pizza"));

// Task 19 - Flatten Product Categories

let items = [
    1,
    2,
    [
        3,
        4,
        [
            5,
            6
        ]
    ]
];

let x = items.flat(Infinity);
console.log(x);

// Task 20 - Mini Shopping Cart Challenge

let cart = ["Mouse", "Keyboard"];
cart.push("Monitor");
cart.unshift("Laptop");
cart.splice(2, 1);
if (cart.includes("Mouse")) {
    console.log("Mouse exists");
} else {
    console.log("Mouse does not exist");
}
let accessories = ["Webcam", "Speaker"];
let completedCart = [...cart, ...accessories];
console.log(completedCart);

