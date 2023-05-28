import { DomService } from "./dom.service";
import { reduceAbilities } from "../utilities/reduce-abilities.util";
import { capitalizeFirstLetter } from "../utilities/capitalize-first-letter.util";
import { FetchTypes } from "../../models/fetch-types.enum";
import { useFetch } from "../utilities/use-fetch.util";
import { PokemonDetails } from "../../models/pokemon-details.model";
import { Pokemon } from "../../models/pokemon.model";

export class TableService {
  constructor(private dom: DomService) {}
  private pokemonsList!: Pokemon[];

  fillTable(pokemonsList: Pokemon[] | any) {
    this.pokemonsList = pokemonsList;
    for (let item of pokemonsList) {
      let row = this.dom.pokemonsTable!.insertRow();
      for (const key in item) {
        let cell = row.insertCell();
        let text = document.createTextNode(item[key]);
        cell.appendChild(text);
      }
    }
    this.handleRows();
  }

  handleRows() {
    this.dom.getTableRows().forEach((row: HTMLTableRowElement, index: number) => {
      row.addEventListener("click", async () => {
        const pokemon: Pokemon = this.pokemonsList[index];
        const response = await useFetch(pokemon.url, FetchTypes.json);  
        this.dom.addButtonFunctionality(pokemon);
        this.dom.fillSprites([
          response.sprites.front_default,
          response.sprites.back_default,
          response.sprites.front_shiny,
          response.sprites.back_shiny,
        ]);
        this.dom.fillDetails(new PokemonDetails(
          capitalizeFirstLetter(pokemon.name),
          reduceAbilities(response.abilities),
          response.height,
          response.base_experience
        ));
      });
    });
  }
}
