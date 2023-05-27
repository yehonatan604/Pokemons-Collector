import { FetchTypes } from "../../models/enums";
import { PokemonDetails } from "../../models/pokemon-details.model";
import { Pokemon } from "../../models/pokemon.model";
import { useFetch } from "../utilities/use-fetch.util";

export class DomService {
  title = document.querySelector<HTMLTitleElement>("#pokemon-title");
  pokemonsTable = document.querySelector<HTMLTableElement>("#pokemonsTable");
  saveButton = document.querySelector<HTMLButtonElement>("#save-button");

  images = [
    document.querySelector<HTMLImageElement>("#pokemonImg-front"),
    document.querySelector<HTMLImageElement>("#pokemonImg-back"),
    document.querySelector<HTMLImageElement>("#pokemonImg-front-shiny"),
    document.querySelector<HTMLImageElement>("#pokemonImg-back-shiny"),
  ];

  details = [
    document.querySelector<HTMLParagraphElement>("#abilities-text"),
    document.querySelector<HTMLParagraphElement>("#height-text"),
    document.querySelector<HTMLParagraphElement>("#experience-text"),
  ];

  // if we wont put this in a function, it will run before we have table rows. 
  // we will call it when we'll need it.
  getTableRows() : NodeListOf<HTMLTableRowElement> {
    return document.querySelectorAll("#pokemonsTable tr");
  }

  addButtonFunctionality(pokemon: Pokemon) {
    this.saveButton!.addEventListener("click", () => {
      localStorage.setItem(pokemon.name, pokemon.url)
    });
  }

  fillDetails(details: PokemonDetails) {
    this.title!.innerHTML = details.title;
    this.details[0]!.innerHTML = details.abilities;
    this.details[1]!.innerHTML = details.height;
    this.details[2]!.innerHTML = details.experience;
  }

  fillSprites(sprites: any) {
    const spritesList = [
      sprites.front_default,
      sprites.back_default,
      sprites.front_shiny,
      sprites.back_shiny,
    ];
  
    spritesList.forEach(async (element: string, index: number) => {
      let pic = await useFetch(element, FetchTypes.blob);
      this.images[index]!.src = URL.createObjectURL(pic);
    });
  }
}
