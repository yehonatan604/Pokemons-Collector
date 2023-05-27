import { DomService } from "../services/dom.service";
import { FetchService } from "../services/fetch.service";

export function fillSprites(
  sprites: any,
  fetchService: FetchService,
  domService: DomService
) {
  const spritesList = [
    sprites.front_default,
    sprites.back_default,
    sprites.front_shiny,
    sprites.back_shiny,
  ];

  spritesList.forEach((element: any, index: number) => {
    fetchService.fetchPokemonImg(domService.images![index], element);
  });
}

export function capitalizeFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.substr(1);
}

export function reduceAbilities(abilities: any): string {
  return abilities.reduce((prev: any, curr: any) => {
    return prev + `${capitalizeFirstLetter(curr.ability.name)} | `;
  }, "");
}
