import { FetchTypes } from "../../models/fetch-types.enum";
import { Pokemon } from "../../models/pokemon.model";
import { useFetch } from "../utilities/use-fetch.util";

export class PokemonsListService {
  private pokemons: Pokemon[] = [];
  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=200";

  async fillPokemonsList() {
    const response = await useFetch(this.url, FetchTypes.json);
    this.pokemons = [...response.results];
  }

  getPokemonsList() : Pokemon[] {
    return [...this.pokemons];
  }
}
