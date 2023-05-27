import "./style.css";
import { DomService } from "./helpers/dom.service";
import { FetchService } from "./helpers/fetch.service";
import { PokemonsListService } from "./helpers/pokemons-list.service";
import { TableService } from "./helpers/table.service";
import { LocalStorageService } from "./helpers/local-storage.service";

let domService = new DomService();
let fetchService = new FetchService();
let localStorageService = new LocalStorageService();
let pokemonsListService = new PokemonsListService(fetchService);
let tableService = new TableService(fetchService, domService, localStorageService);

await pokemonsListService.getPokemons();
let pokemons = pokemonsListService.getPokemonsList()[0];

tableService.fillTable(pokemons);