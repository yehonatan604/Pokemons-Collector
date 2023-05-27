import { FetchTypes } from "../../models/enums";

export class FetchService {

  async fetchPokemons(url: string, fetchTypes: FetchTypes): Promise<any> {
      let response = await fetch(url);
      if (response.status === 200) {
        return fetchTypes == 1 ? await response.json(): await response.blob();
      } else {
        throw new Error(response.statusText);
      }
  }

}