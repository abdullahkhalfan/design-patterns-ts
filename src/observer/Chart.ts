import DataSource from "./DataSource";
import Observer from "./Observer";

export default class Chart implements Observer {

    constructor(
        protected _dataSource: DataSource
    ) {}

    update(): void {
        console.log(`Chart got updated with ${this._dataSource.value}`);
    }
}