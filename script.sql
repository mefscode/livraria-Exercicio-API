create database livrariaDB;
use livrariaDB;

create table cliente (
  id          int primary key auto_increment,
  nome        varchar(100),
  cpf         varchar(14),
  email       varchar(100),
  nascimento  date
);

create table livro (
  id          int primary key auto_increment,
  titulo      varchar(200),
  autor       varchar(100),
  genero      varchar(50),
  preco       decimal(10,2),
  estoque     int
);

create table venda (
  id          int primary key auto_increment,
  id_cliente  int,
  data        datetime,
  status      varchar(50),
  foreign key (id_cliente) references cliente(id)
);

create table venda_item (
  id          int primary key auto_increment,
  id_venda    int,
  id_livro    int,
  preco       decimal(10,2),
  foreign key (id_venda) references venda(id),
  foreign key (id_livro) references livro(id)
);
