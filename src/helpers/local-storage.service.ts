export class LocalStorageService {
    add(key: any, value : any) {
        localStorage.setItem(key, value)
    }
}