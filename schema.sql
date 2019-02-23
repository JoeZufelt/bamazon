create database bamazon;

use bamazon;

create table products (
	id integer not null auto_increment,
    product varchar(50),
    department varchar(50),
    price integer(4),
    quantity integer(4),
    primary key (id)
);

insert into products (product, department, price, quantity)
values ("Bag of Holding", "Apparel", 2500, 5);
insert into products (product, department, price, quantity)
values ("Coding for Dum Dums", "Books", 25, 500);
insert into products (product, department, price, quantity)
values ("Cheap Sunglasses", "Apparel", 5, 1000);
insert into products (product, department, price, quantity)
values ("Pizza", "Food", 10, 100);
insert into products (product, department, price, quantity)
values ("Buffalo Chicken Scented Candle", "Candles", 25, 500);
insert into products (product, department, price, quantity)
values ("Star Wars Puzzle", "Hobbies", 15, 450);
insert into products (product, department, price, quantity)
values ("Nintendo 64", "Video Games", 50, 10);
insert into products (product, department, price, quantity)
values ("Binder Full of Pokemon Cards", "Hobbies", 2000, 1);
insert into products (product, department, price, quantity)
values ("Gaming Headset", "Video Games", 70, 300);
insert into products (product, department, price, quantity)
values ("An Actual House", "Home", 9000, 14);