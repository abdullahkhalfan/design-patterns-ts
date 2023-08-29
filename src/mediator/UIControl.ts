import Dialog from "./Dialog";

export default abstract class UIControl {
    constructor(protected _owner: Dialog) {
    }
}