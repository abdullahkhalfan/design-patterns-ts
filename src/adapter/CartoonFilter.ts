import CartoonFilterThirdParty from "./CartoonFilterThirdParty";
import Filter from "./Filter";
import Image from "./Image";

/**
 * An adapter
 */
export default class CartoonFilter implements Filter {
    protected _thirdParty: CartoonFilterThirdParty;

    constructor() {
        this._thirdParty = new CartoonFilterThirdParty();
    }

    apply(image: Image): void {
        this._thirdParty.setup();
        this._thirdParty.render(image);
    }
}