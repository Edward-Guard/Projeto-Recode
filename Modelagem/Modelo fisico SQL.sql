create database recodeViagem;
use recodeviagem;
create table cliente(
	nome varchar(50),
	nascimento varchar(50),
    cpf bigint(50),
    email varchar(50),
    primary key(cpf)
);

create table viagem(
	id int(50) not null auto_increment,
    origem enum('Demacia','Noxus','Shurima','Piltover','Targon','Freljord','Ionia') not null,
    destino enum('Demacia','Noxus','Shurima','Piltover','Targon','Freljord','Ionia') not null,
    passageiros tinyint(2),
    primary key(id)
);

insert into cliente(nome,nascimento,cpf,email) value(
	'Paulo José',
   '08-12-1978',
    7452247105,
    'PJ@gmail.com'
);

insert into cliente(nome,nascimento,cpf,email) value(
	'Augusto Santos',
    '12-03-1995',
    88325875054,
    'AugustoS@gmail.com'
);
select * from viagem;
select * from cliente;
