import Command from "./Command";
import CustomerService from "./CustomerService";

export default class AddCustomerCommand implements Command {
    constructor(protected _customerService: CustomerService) {
    }

    execute(): void {
        this._customerService.addCustomer();
    }
}