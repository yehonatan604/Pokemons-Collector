import "./style.css";
import { FetchService } from "./helpers/services/fetch.service";
import { DomService } from "./helpers/services/dom.service";
import { PokemonsListService } from "./helpers/services/pokemons-list.service";
import { TableService } from "./helpers/services/table.service";

let fetchService = new FetchService(); 
let domService = new DomService(fetchService); 
let pokemonsListService = new PokemonsListService(fetchService); 
let tableService = new TableService(fetchService, domService);

await pokemonsListService.fillPokemonsList();
let pokemons = pokemonsListService.getPokemonsList();

tableService.fillTable(pokemons);
