// Task 1: Employee Salary Dashboard

let employee =[
    { name: "Ajay",salary: 45000 },
    { name: "Mani", salary: 75000 },
    { name: "Nithin",salary: 150000 },
    { name: "Vijay", salary: 125000 },
    { name: "Srikanth",salary: 90000 }
];
    let a = employee.map(emp => emp.name);

    console.log("Employee names: ", a)

    let b   = employee.filter(emp => emp.salary > 50000);

    console.log("Employees with salary > 50000: ", b)

    let c = employee.find(emp => emp.salary > 100000);
    console.log("Employee with salary > 100000: ", c)

    let d = employee.reduce((acc, emp) => acc + emp.salary, 0);

    console.log("Total salary expense : ", d)


    // Task 2: E-Commerce Cart Management

    let cart1 = [
        { item: "Laptop", price: 50000 },
        { item: "Mobile", price: 20000 },
        { item: "Headphones", price: 5000 }
    ];

    let cart2 = [
        { item: "Keyboard", price: 3000 },
        { item: "Mouse", price: 1500 }
    ];

    let mergedCart = [...cart1, ...cart2];

    console.log("Merged Cart: ", mergedCart);

    let newProduct = { item: "Monitor", price: 10000 };
    let updatedCart = [...mergedCart, newProduct];

    function checkout(...products) {
        console.log("Checking out products: ", products);
    }

      checkout(...updatedCart);

    //   Task 3: Student Report Card

    let student = {
        Name: "Prashanth",
        department: "Computer Science",
        marks: {
            maths: 95,
            science: 75,
            english: 80
        }
    }
    let { Name, department, marks: { maths, science, english } } = student;

    let totalMarks = maths  + science + english;
    let averageMarks = totalMarks / 3;

    console.log("Student Name: ", Name);
    console.log("Department: ", department);
    console.log("Total Marks: ", totalMarks);
    console.log("Average Marks: ", averageMarks);

    // Task 4: Product Search System

    let products = "Laptop, Mouse, Keyboard, Monitor, Printer, Scanner";
     
    let search = "  Monitor  ";

    console.log(search.trim());
    console.log(products.toLowerCase());

    if(products.includes(search)){
        console.log("Product found !");
    } else {
        console.log("Product not found !");

    }

    let highlightproduct = products.replace("Laptop", "**Laptop**");
    console.log("Highlighted Product: ", highlightproduct);

    // Task 5: Movie Collection Manager

    let movies = ["varsham", "maharshi", "pushpa", "bahubali", "RRR"];

    movies.push("KGF","Peddi");
    console.log("After push():", movies);

    movies.shift();
    console.log("After shift():", movies);

    movies.unshift("Vikram");
    console.log("After unshift():", movies);

    movies.splice(2, 1,"Leo");
    console.log("After splice():", movies);

    let ratings = [8.9, 9.5, 7.8, 7.9, 9.0, 8.5, 9.2];
    ratings.sort((a, b) => b - a);
    console.log("Ratings (Descending):", ratings);

    let searchMovie = "Leo";

    if (movies.includes(searchMovie)) {
        console.log(searchMovie + " is available.");
    } else {
    console.log(searchMovie + " is not available.");
    }






