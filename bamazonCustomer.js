var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID: " + connection.threadId + "\n");
    welcome();
});

function welcome() {
    console.log("Welcome to Bamazon! Here. Have a look at our wares:\n")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].id + "\nProduct: " + res[i].product + "\nDepartment: " + res[i].department + "\nPrice: $" + res[i].price + "\nQuantity: " + res[i].quantity + "\n-------------------------------\n");
        } // End for loop
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to purchase and item?",
                choices: ["Yes", "No"],
                name: "purchase"
            }
        ]).then(function (begin) {
            if (begin.purchase === "Yes") {
                purchase();
            } else {
                console.log("Thank you. Please come again!");
                connection.end();
            }
        });
    }); // End connection
} // End welcome

function purchase() {
    connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err;
    inquirer.prompt([
        {
            type: "input",
            message: "Please input the ID for the product you would like to purchase",
            name: "product"
        },
        {
            type: "input",
            message: "Cool. How many do you want?",
            name: "quantity"
        }
    ]).then(function (prompt) {
        if(prompt.product < results.length + 1 && prompt.product > 0){
            var item_pos = parseInt(prompt.product) - 1;
            var availableStock = parseInt(results[item_pos].quantity);
            if (availableStock > 0 && prompt.quantity <= availableStock){
                var newStock = availableStock - parseInt(prompt.quantity);
                var cost = results[item_pos].price * prompt.quantity;
                connection.query("UPDATE products SET quantity=? WHERE id=?", [newStock, prompt.product], function(err){
                    if (err) throw err;
                    console.log("Thank you for your purchase!");
                    console.log("Your total cost is: $" + cost);
                    welcome();
                });
                // console.log("This thing worked.");
                // welcome();
            }else {
                console.log("Not enough stock available. Please try again.");
                welcome();
            }
        } else{
            console.log("Please select a valid ID.");
            welcome();
        } // End else
    }); // End then
}); 
}; // End purchase