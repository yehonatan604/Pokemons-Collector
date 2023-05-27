import { FetchTypes } from "../../models/enums";

export const useFetch = async (url: string, fetchType: FetchTypes) => {
    let response = await fetch(url);
    if (response.status === 200) {
      return fetchType == FetchTypes.json ? await response.json(): await response.blob();
    } else {
      throw new Error(response.statusText);
    }
}
