import DataSource from "./DataSource";
import Observer from "./Observer";

export default class Spreadsheet implements Observer {

    constructor(
        protected _dataSource: DataSource
    ) {}

    update(): void {
        console.log(`Spreadsheet got updated with ${this._dataSource.value}`);
    }
}