import { Pokemon } from "../../models/pokemon.model";
import { DomService } from "./dom.service";
import { FetchService } from "./fetch.service";
import { LocalStorageService } from "./local-storage.service";
import { capitalizeFirstLetter, fillSprites, reduceAbilities } from "../utilities/utilities";

export class TableService {
  constructor(
    private fetchService: FetchService,
    private domService: DomService,
    private localStorageService: LocalStorageService
  ) {}

  pokemonsList: any;
  storageList: any;

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
    
    this.handleRows(document.querySelectorAll("#pokemonsTable tr"));
  }

  handleRows(rows: NodeListOf<HTMLTableRowElement>) {
    rows.forEach((row, index) =>
    row.addEventListener("click", () => {
      let pokemon: Pokemon | any = this.pokemonsList[index.toString()];
        this.fetchService.fetchPokemons(pokemon.url).then((res) => {
          
          this.domService.saveButton!.addEventListener("click", () => {
            this.localStorageService.add(pokemon.name, pokemon.url);
          });

          fillSprites(res.sprites, this.fetchService, this.domService);

          this.domService.fillDetails(
            capitalizeFirstLetter(pokemon.name),
            reduceAbilities(res.abilities),
            res.height,
            res.base_experience
          );
        });
      })
    );
  }
}
