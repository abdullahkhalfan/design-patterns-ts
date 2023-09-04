import ViewEngine from "./ViewEngine";

export default class VividViewEngine implements ViewEngine {
    render(fileName: string, data: any): string {
        return "View rendered by Vivid";
    }
}