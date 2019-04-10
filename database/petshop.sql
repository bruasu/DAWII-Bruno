create database petshop;
use petshop;

create table users(
    id_user int not null primary key auto_increment,
    nome varchar(250) not null,
    login varchar(250) not null UNIQUE,
    password varchar(250) not null,
    email varchar(250) not null UNIQUE,
    type_user varchar(20) not null
);

create table sales(
    id_sale int not null primary key auto_increment,
    id_user int null,
    total_value FLOAT not null,
    purchase_date date not null,
    delivery_address VARCHAR(250) null,
    foreign key (id_user) references users(id_user)
);

CREATE TABLE categories(
    id_category int not null primary key auto_increment,
    name VARCHAR(250)
);

CREATE TABLE products(
    id_product int not null primary key auto_increment,
    id_category int not null,
    name VARCHAR(250) NOT NULL,
    sale_price float NULL,
    purchase_price float NULL,
    offer_price FLOAT NULL,
    description VARCHAR(250),
    quantity int NULL,
    image varchar(250) NULL,
    status boolean,    
    foreign key (id_category) references categories(id_category)
);

CREATE TABLE sales_product(
    id_sale int not null,
    id_product int not null,
    quantity int null,
    value_product float
);

