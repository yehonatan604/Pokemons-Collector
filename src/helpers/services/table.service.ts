import { Pokemon } from "../../models/pokemon.model";
import { DomService } from "./dom.service";
import { FetchService } from "./fetch.service";
import { capitalizeFirstLetter, reduceAbilities } from "../utilities/utilities";
import { FetchTypes } from "../../models/enums";

export class TableService {
  constructor(private useFetch: FetchService, private dom: DomService) {}
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

      row.addEventListener("click", () => {
        let pokemon: Pokemon | any = this.pokemonsList[+index.toString()];
          this.useFetch.fetchPokemons(pokemon.url, FetchTypes.json).then((res) => {  

            this.dom.fillSprites(res.sprites);
            this.dom.fillDetails(
              capitalizeFirstLetter(pokemon.name),
              reduceAbilities(res.abilities),
              res.height,
              res.base_experience
            );
            this.dom.saveButton!.addEventListener("click", () => {
              localStorage.setItem(pokemon.name, pokemon.url)
            });

          });
      });
      
    });
  }
}
