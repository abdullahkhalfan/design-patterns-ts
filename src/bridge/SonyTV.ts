import Device from "./Device";

export default class SonyTV implements Device {
    turnOn(): void {
        console.log("SonyTV:", "Turning on...");
    }

    turnOff(): void {
        console.log("SonyTV:", "Turning off...");
    }

    setChannel(number: number): void {
        console.log("SonyTV:", `Setting channel to ${number}...`)
    }
}