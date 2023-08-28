import UIControl from "./UIControl";

/**
 * The mediator.
 */
export default interface Dialog {
    handleChange(control: UIControl): void;
}