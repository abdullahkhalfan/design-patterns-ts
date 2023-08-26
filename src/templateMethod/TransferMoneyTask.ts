import Task from "./Task";

export default class TransferMoneyTask extends Task {
    protected override doExecute(): void {
        console.log("Transfer money");
    }
}