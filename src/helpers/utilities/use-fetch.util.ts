import { FetchTypes } from "../../models/fetch-types.enum";
import { Pokemon } from "../../models/pokemon.model";

export const useFetch = async (url: string, fetchType: FetchTypes): Promise<Pokemon|any> =>{
    const response = await fetch(url);
    if (response.status === 200) {
      return fetchType === FetchTypes.json ? await response.json(): await response.blob();
    } else {
      throw new Error(response.statusText);
    }
}
