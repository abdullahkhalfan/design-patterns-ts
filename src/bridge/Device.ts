export default interface Device {
    turnOn(): void;
    turnOff(): void;
    setChannel(number: number): void;
}