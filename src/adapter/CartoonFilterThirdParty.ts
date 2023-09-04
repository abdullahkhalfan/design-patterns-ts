import Image from "./Image";

/**
 * A 3rd party filter
 */
export default class CartoonFilterThirdParty  {
    setup() {
        console.log("Setting up third party stuff...");
    }

    render(image: Image) {
        console.log("Applying cartoon filter...")
    }
}