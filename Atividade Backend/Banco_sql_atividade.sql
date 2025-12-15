CREATE database pokedex;
use pokedex;

create table pokemons(
id int primary key auto_increment not null,
nome_pokemon varchar(255) not null,
tipo_pokemon varchar(255) not null,
tem_evolucao enum ("sim","não")
);
