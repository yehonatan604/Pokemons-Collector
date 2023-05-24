export class DomService {
  pokemonsTable = document.querySelector<HTMLTableElement>("#pokemonsTable");
  title = document.querySelector<HTMLTitleElement>("#pokemon-title");

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
}
