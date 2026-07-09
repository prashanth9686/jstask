// Task 1: Employee Age Calculator

let data = new Date("2001-09-05");  

let currentYear = new Date().getFullYear();
let age = currentYear - data.getFullYear();
console.log("Employee Age: " , age , "Years");

// Task 2: Online Appointment Scheduler

let data1 = new Date();
    
data1.setFullYear(2027);
data1.setMonth(11);
data1.setDate(15);
data1.setHours(10);
data1.setMinutes(30);

console.log("Updated Appointment " , data1);

// Task 3: Multi-Country Meeting Time

let data2 = new Date();


console.log("Current Time in India: " ,data2.toLocaleString("en-US", {timeZone: "Asia/kolkata"}));

console.log("Current Time in New York: " , data2.toLocaleString("en-US", {timeZone: "America/New_York"}));

console.log("Current Time in Tokyo: " , data2.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));

// Task 4: Product Warranty Expiry

let data3 = new Date();

data3.setFullYear(data3.getFullYear() + 2);

console.log("Purchase Date: " , new Date());
console.log("Warranty Expiry Date: " , data3);

// Task 5: Digital Clock

let data4 = new Date();
console.log("Digital Clock: " , data4.toLocaleTimeString());
setInterval(() => {
    let data4 = new Date();
    console.log("Digital Clock: " , data4.toLocaleTimeString());
}, 1000);
