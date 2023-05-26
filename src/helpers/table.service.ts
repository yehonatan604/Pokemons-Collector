import { Pokemon } from "../models/pokemon.model";
import { capitalizeFirstLetter } from "../utilities/capitalize-first-letter";
import { fillSprites } from "../utilities/fill-sprites";
import { reduceAbilities } from "../utilities/reduce-abilities";
import { DomService } from "./dom.service";
import { FetchService } from "./fetch.service";

export class TableService {
  constructor(
    private fetchService: FetchService,
    private domService: DomService
  ) {}

  pokemonsList: any;
  fillTable(pokemonsList: any) {
    this.pokemonsList = pokemonsList;
    for (let item of pokemonsList) {
      let row = this.domService.pokemonsTable!.insertRow();
      for (const key in item) {
        let cell = row.insertCell();
        let text = document.createTextNode(item[key]);
        cell.appendChild(text);
      }
    }
    this.handleRows();
  }

  handleRows() {
    const rows = document.querySelectorAll("#pokemonsTable tr");
    rows.forEach((row, index) =>
      row.addEventListener("click", () => {
        let pokemon: Pokemon | any = this.pokemonsList[index.toString()];
        this.fetchService.fetchPokemons(pokemon.url).then((res) => {
          fillSprites(res.sprites, this.fetchService, this.domService);
          this.domService.fillDetails(
            capitalizeFirstLetter(pokemon.name),
            reduceAbilities(res.abilities)!,
            res.height,
            res.base_experience
          );
        });
      })
    );
  }
}
