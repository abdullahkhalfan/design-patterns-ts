import RemoteControl from "./RemoteControl";

export default class AdvancedRemoteControl extends RemoteControl {
    setChannel(number: number): void {
        this._device.setChannel(number);
    }
}