import Filter from "./Filter";

export default class BlackWhiteFilter implements Filter {
    filter(fileName: string): void {
        console.log('Applying black and white filter');
    }
}