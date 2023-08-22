import Command from "./Command";

export default class BlackWhiteCommand implements Command {
    execute(): void {
        console.log("Black and white");
    }
}