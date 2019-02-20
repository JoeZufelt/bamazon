# Bamazon
Hello and welcome to Bamazon!

## Overview
Have you ever been sitting on the couch and think to yourself, "Oh boy. I really need to by something right now." Well good news, everyone! Bamazon is here for you! Just run the bamazonCustomer.js application, input the ID of the item you would like to buy, how many of them you want, and Bamazon will tell you how much you owe!

## Instillation
You *will* need to install two npm packages. You can do this in two ways:
1. Run *npm install* and all packages will install automatically.
1. Manually install both packages by running *npm install mysql inquirer*

## Breakdown
Let's take a look at how this works:
1. Make sure you are connected to a localhost server through MySQL

1. Run the bamazonCustomer.js application through node on your computer

1. You will be prompted to make a choice: buy something or leave. If you say "yes", you will continue to the next steps. If you say "no", the application will end.

1. Let's say you chose "yes". Good choice! You will then be prompted to input the ID of the item you would like to purchase. After the ID, you will be asked how much of that item you would like to purchase.

1. Congratulations! You just made a purchase through Bamazon! You will be told how much your total cost is and the inventory will update.

1. The application will then start again, asking if you would like to make another purchase. If you are done, chose "no" and the application will end.

