import Component from "./Component";

/**
 * Just for simulation.
 */
export default class ContextMenu {
    static duplicate(component: Component): Component {
        return component.clone();
    }
}