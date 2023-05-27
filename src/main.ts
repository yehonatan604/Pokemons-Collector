import "./style.css";
import { FetchService } from "./helpers/services/fetch.service";
import { DomService } from "./helpers/services/dom.service";
import { PokemonsListService } from "./helpers/services/pokemons-list.service";
import { TableService } from "./helpers/services/table.service";

let fetchService = new FetchService(); //1: take & print pokemons
let domService = new DomService(fetchService); //2: make dom service
let pokemonsListService = new PokemonsListService(fetchService); //3: fetch pokemons & map to list
let tableService = new TableService(fetchService, domService); //4: render

await pokemonsListService.fillPokemonsList();
let pokemons = pokemonsListService.getPokemonsList()[0];

tableService.fillTable(pokemons);