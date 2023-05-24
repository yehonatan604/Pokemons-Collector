export class FetchService {

    async fetchPokemons(url: string = `https://pokeapi.co/api/v2/pokemon?limit=50`): Promise<any> {
        let response = await fetch(url);
        if (response.status === 200) {
          return await response.json();
        } else {
          throw new Error(response.statusText);
        }
    }

    async fetchPokemonImg(image: HTMLImageElement | null, url: string) {
        let response = await fetch(url);
        if (response.status === 200) {
          let pic =  await response.blob();
          return image!.src = URL.createObjectURL(pic);
        } else {
        throw new Error(response.statusText);
        }
    }

}