import { FetchTypes } from "../../models/enums";
import { Pokemon } from "../../models/pokemon.model";
import { FetchService } from "./fetch.service";

export class PokemonsListService {
  constructor(private useFetch: FetchService) {}

  private pokemons: Pokemon[] = [];
  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=200";

  async fillPokemonsList() {
    let objectEntries = Object.entries(await this.useFetch.fetchPokemons(this.url, FetchTypes.json));
    for (let [index, [, value]] of objectEntries.entries()) {
      if (index == 3) {
        this.pokemons.push(value as Pokemon);
      }
    }
  }

  getPokemonsList() {
    return [...this.pokemons];
  }
}
