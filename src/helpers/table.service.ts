import { Pokemon } from "../models/pokemon.model";
import { capitalizeFirstLetter } from "./capitalize-first-letter";
import { DomService } from "./dom.service";
import { FetchService } from "./fetch.service";

export class TableService {
  constructor(private fetchService: FetchService, private domService: DomService) {}

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
            let sprites = [
              res.sprites.front_default,
              res.sprites.back_default,
              res.sprites.front_shiny,
              res.sprites.back_shiny
            ];
            
            sprites.forEach((element:any, index:number) => {
              this.fetchService.fetchPokemonImg(this.domService.images![index], element)
            })

          this.domService.title!.innerHTML = capitalizeFirstLetter(pokemon.name);

          let abilities: string = res.abilities.reduce(
            (prev: any, curr: any) => {
              return prev + `${capitalizeFirstLetter(curr.ability.name)} | `;
            }, "");

          this.domService.details![0]!.innerHTML = abilities!;
          this.domService.details![1]!.innerHTML = res.height;
          this.domService.details![2]!.innerHTML = res.base_experience;
        });
      })
    );
  }

}
