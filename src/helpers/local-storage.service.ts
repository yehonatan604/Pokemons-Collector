export class LocalStorageService {
    add(key: any, value : any) {
        localStorage.setItem(key, value)
    }

    get(item: any) : string | any {
        return localStorage.getItem(item);
    }
}