import { Pokemon } from "../../models/pokemon.model";
import { DomService } from "./dom.service";
import { reduceAbilities } from "../utilities/reduce-abilities.util";
import { capitalizeFirstLetter } from "../utilities/capitalize-first-letter.util";
import { FetchTypes } from "../../models/enums";
import { useFetch } from "../utilities/use-fetch.util";
import { PokemonDetails } from "../../models/pokemon-details.model";

export class TableService {
  constructor(private dom: DomService) {}
  private pokemonsList!: Pokemon[];

  fillTable(pokemonsList: any) {
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
    this.dom.getTableRows().forEach((row, index) => {
      row.addEventListener("click", async () => {
        const pokemon: Pokemon | any = this.pokemonsList[+index.toString()];
        const response = await useFetch(pokemon.url, FetchTypes.json);  
        const details = new PokemonDetails(
          capitalizeFirstLetter(pokemon.name),
          reduceAbilities(response.abilities),
          response.height,
          response.base_experience
        )
        this.dom.addButtonFunctionality(pokemon);
        this.dom.fillSprites(response.sprites);
        this.dom.fillDetails(details);
      });
    });
  }
}
