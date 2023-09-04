import ViewEngine from "./ViewEngine";
import VividViewEngine from "./VividViewEngine";

export default class Controller {
    protected render(fileName: string, data: any): void {
        const html = this.createViewEngine().render(fileName, data);

        console.log(html);
    }

    /**
     * A factory method
     */
    protected createViewEngine(): ViewEngine {
        return new VividViewEngine(); // Default engine
    }
}