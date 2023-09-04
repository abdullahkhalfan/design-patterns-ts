/**
 * Factory Method
 *
 * Defer the creation of an object to subclasses. You would typically have a
 * method that acts as the "factory". The method creates an object, and
 * subclasses can override the method to introduce a different object that
 * should get created.
 */

import ProductsController from "./ProductsController";

const productsController = new ProductsController();

productsController.listProducts();