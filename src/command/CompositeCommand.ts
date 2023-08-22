import Command from "./Command";

export default class CompositeCommand implements Command {
    protected _commands: Command[] = [];

    add(command: Command): void {
        this._commands.push(command);
    }

    execute(): void {
        for (let command of this._commands) {
            command.execute();
        }
    }
}