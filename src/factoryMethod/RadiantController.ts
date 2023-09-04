import Controller from "./Controller";
import RadiantViewEngine from "./RadiantViewEngine";
import ViewEngine from "./ViewEngine";

export default class RadiantController extends Controller {
    protected override createViewEngine(): ViewEngine {
        return new RadiantViewEngine();
    }
}