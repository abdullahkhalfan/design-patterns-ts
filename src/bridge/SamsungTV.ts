import Device from "./Device";

export default class SamsungTV implements Device {
    turnOn(): void {
        console.log("SamsungTV:", "Turning on...");
    }

    turnOff(): void {
        console.log("SamsungTV:", "Turning off...");
    }

    setChannel(number: number): void {
        console.log("SamsungTV:", `Setting channel to ${number}...`)
    }
}