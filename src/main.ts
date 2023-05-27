import "./style.css";
import { DomService } from "./helpers/services/dom.service";
import { FetchService } from "./helpers/services/fetch.service";
import { LocalStorageService } from "./helpers/services/local-storage.service";
import { PokemonsListService } from "./helpers/services/pokemons-list.service";
import { TableService } from "./helpers/services/table.service";

let domService = new DomService();
let fetchService = new FetchService();
let localStorageService = new LocalStorageService();
let pokemonsListService = new PokemonsListService(fetchService);
let tableService = new TableService(fetchService, domService, localStorageService);

await pokemonsListService.getPokemons();
let pokemons = pokemonsListService.getPokemonsList()[0];

tableService.fillTable(pokemons);