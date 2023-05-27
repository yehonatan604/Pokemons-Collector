import { FetchTypes } from "../../models/enums";
import { Pokemon } from "../../models/pokemon.model";
import { FetchService } from "./fetch.service";

export class PokemonsListService {
  constructor(private useFetch: FetchService) {}

  private pokemons: Pokemon[] = [];
  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=200";

  async fillPokemonsList() {
    let response = await this.useFetch.fetchPokemons(this.url, FetchTypes.json);
    this.pokemons = [...response.results];
  }

  getPokemonsList() {
    return [...this.pokemons];
  }
}
