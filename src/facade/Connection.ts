export default class Connection {
    constructor(protected _ip: string) {
        this.connect();
    }

    connect(): void {
        console.log(`Connecting to ${this._ip}...`);
    }

    disconnect(): void {
        console.log(`Disconnecting from ${this._ip}...`);
    }
}