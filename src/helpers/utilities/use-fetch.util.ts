import { FetchTypes } from "../../models/fetch-types.enum";

export const useFetch = async (url: string, fetchType: FetchTypes) => {
    const response = await fetch(url);
    if (response.status === 200) {
      return fetchType == FetchTypes.json ? await response.json(): await response.blob();
    } else {
      throw new Error(response.statusText);
    }
}
