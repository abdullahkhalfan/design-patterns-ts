import Device from "./Device";

export default class RemoteControl {
    /**
     * @param _device The bridge
     */
    constructor(protected _device: Device) {
    }

    turnOn(): void {
        this._device.turnOn();
    }

    turnOff(): void {
        this._device.turnOff();
    }
}