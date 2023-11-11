use gallery;

drop table register_Users;

create table register_Users(
	id INT auto_increment,
    username varchar(50) not null,
    age int not null,
    email varchar(50) not null,
    password  varchar(50) not null,
    primary key (id)
);

select * from register_Users