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

  fillDetails(title: string, abilities: any, height: string, experience: string) {
    this.title!.innerHTML = title;
    this.details[0]!.innerHTML = abilities;
    this.details[1]!.innerHTML = height;
    this.details[2]!.innerHTML = experience;
  }
}
