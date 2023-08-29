import Component from "./Component";

export default class Group implements Component {
    protected _components: Component[] = [];

    add(component: Component): void {
        this._components.push(component);
    }

    render(): void {
        for (const component of this._components) {
            component.render();
        }
    }

    move(): void {
        for (const component of this._components) {
            component.move();
        }
    }
}