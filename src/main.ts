import "./style.css";
import { DomService } from "./helpers/dom.service";
import { FetchService } from "./helpers/fetch.service";
import { PokemonsListService } from "./helpers/pokemons-list.service";
import { TableService } from "./helpers/table.service";

let domService = new DomService();
let fetchService = new FetchService();
let pokemonsListService = new PokemonsListService(fetchService);
let tableService = new TableService(fetchService, domService);

await pokemonsListService.getPokemons();
let pokemons = pokemonsListService.getPokemonsList()[0];

tableService.fillTable(pokemons);
