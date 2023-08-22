import Command from "./Command";

export default class ResizeCommand implements Command {
    execute(): void {
        console.log("Resize");
    }
}