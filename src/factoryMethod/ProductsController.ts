import RadiantController from "./RadiantController";

export default class ProductsController extends RadiantController {

    listProducts(): void {
        // Should normally get these from a database.
        const data = {
            1: {
                "name":  "Test Product",
                "price": 10.50,
            },
            2: {
                "name": "Another Product",
                "price": 6.48,
            },
        };

        this.render("products.html", data);
    }
}