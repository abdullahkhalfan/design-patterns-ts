import ViewEngine from "./ViewEngine";

export default class RadiantViewEngine implements ViewEngine {
    render(fileName: string, data: any): string {
        return "View rendered by Radiant";
    }
}