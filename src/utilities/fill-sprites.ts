import { DomService } from "../helpers/dom.service"
import { FetchService } from "../helpers/fetch.service"

export function fillSprites(sprites: any, fetchService: FetchService, domService: DomService) {
    [
        sprites.front_default,
        sprites.back_default,
        sprites.front_shiny,
        sprites.back_shiny
      ].forEach((element:any, index:number) => {
        fetchService.fetchPokemonImg(domService.images![index], element)
      })
}