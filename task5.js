// Task 1 - Employee Login (Scope)

function employeeLogin() {

    if (true) {

        var companyName = "Stackly IT";
        let employeeId = 101;
        const password = "Stackly123";

        console.log("Employee ID :", employeeId);
        console.log("Password :", password);
    }

    console.log("Company :", companyName);

     console.log(employeeId);
     console.log(password);
}

employeeLogin();



// Task 2-ATM Machine (Hoisting)

console.log(balance);

var balance = 45000;

    console.log(amount);
    let amount = 25000;
    console.log(cash);
    const cash = 15000;

// Task 3-Food Delivery App (Named Function)

function orderFood(foodName) {

    console.log("Order Placed :", foodName);

}

orderFood("Chicken Biryani");


// Task 4-WhatsApp Status (Anonymous Function)

let updateStatus = function (status) {

    console.log("Status Updated :", status);

};

updateStatus("Busy in Meeting");


// Task 5-Weather App (Arrow Function)

let weather = (city, temperature) => {

    console.log(city + " Temperature is " + temperature + "°C");

};

weather("Chennai", 36);


// Task 6-Flipkart Offer (IIFE)

(function () {

    console.log("Today's Offer");
    console.log("Flat 60% Discount");

})();


// Task 7-Online Payment (Higher Order + Callback)

function paymentSuccess() {

    console.log("Payment Successful");

}

function makePayment(callback) {

    console.log("Payment Processing...");
    callback();

}

makePayment(paymentSuccess);


// Task 8-YouTube Playlist (Generator Function)

function* playlist() {

    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";

}

let videos = playlist();
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);


// Task 9-Student Result (Return)

function calculateTotal() {

    return 485;

}
let totalMarks = calculateTotal();
console.log("Total Marks :", totalMarks);


// Task 10-Shopping Cart (Return)

function cartTotal(price1, price2, price3) {

    return price1 + price2 + price3;

}

let totalAmount = cartTotal(500, 800, 1200);

console.log("Total Amount :", totalAmount);


// Task 11-salary Calculator(Normal Function)

function salary(basic, hra, bonus) {

    console.log("Total Salary :", basic + hra + bonus);

}
salary(45000, 12000, 8000);


// Task 12 - Food Bill (Currying)

function foodBill(food) {

    return function (drinks) {

        return function (dessert) {

            console.log(food + drinks + dessert);
        };
    };
}

foodBill(200)(100)(80);


// Task 13-E-commerce Coupon Generator

function* coupons() {

    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";

    return "No More Coupons";

}

let coupon = coupons();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 14-Bank Transaction (Higher Order+Callback)

function transactionSuccessful() {

    console.log("Transaction Successful");

}
function withdraw(callback) {
    console.log("Processing...");
    callback();

}
withdraw(transactionSuccessful);


// Task 15-Employee Profile(Scope)


function employeeProfile() {
    if (true) {

        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;

    }
    console.log(company);
    console.log(designation);
    console.log(salary);

}
employeeProfile();