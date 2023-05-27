import "./style.css";
import { DomService } from "./helpers/services/dom.service";
import { PokemonsListService } from "./helpers/services/pokemons-list.service";
import { TableService } from "./helpers/services/table.service";

let domService = new DomService(); 
let pokemonsListService = new PokemonsListService(); 
let tableService = new TableService(domService);

await pokemonsListService.fillPokemonsList();
let pokemons = pokemonsListService.getPokemonsList();

tableService.fillTable(pokemons);
