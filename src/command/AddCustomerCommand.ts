import Command from "./Command";
import CustomerService from "./CustomerService";

export default class AddCustomerCommand implements Command {

    protected _customerService: CustomerService;

    constructor(customerService: CustomerService) {
        this._customerService = customerService;
    }

    execute(): void {
        this._customerService.addCustomer();
    }
}