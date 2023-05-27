import { FetchTypes } from "../../models/enums";
import { FetchService } from "./fetch.service";

export class DomService {
  constructor(private useFetch: FetchService) {}

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

  fillDetails(title: string, abilities: any, height: string, experience: string) {
    this.title!.innerHTML = title;
    this.details[0]!.innerHTML = abilities;
    this.details[1]!.innerHTML = height;
    this.details[2]!.innerHTML = experience;
  }

  fillSprites(sprites: any) {
    const spritesList = [
      sprites.front_default,
      sprites.back_default,
      sprites.front_shiny,
      sprites.back_shiny,
    ];
  
    spritesList.forEach(async (element: any, index: number) => {
      let pic = await this.useFetch.fetchPokemons(element, FetchTypes.blob);
      this.images[index]!.src = URL.createObjectURL(pic);
    });
  }
}
