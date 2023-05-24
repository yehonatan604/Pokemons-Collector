import { Pokemon } from "../models/pokemon.model";
import { FetchService } from "./fetch.service";

export class PokemonsListService {
  constructor(private fetchService: FetchService) {}

  private pokemons: Pokemon[] = [];

  async getPokemons() {
    let objectEntries = Object.entries(await this.fetchService.fetchPokemons());
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
