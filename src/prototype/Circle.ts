import Component from "./Component";

export default class Circle implements Component {
    protected _radius: number | null = null;

    render(): void {
        console.log("Rendering circle");
    }

    clone(): Circle {
        const newCircle = new Circle();

        newCircle.radius = this._radius;

        return newCircle;
    }

    get radius(): number | null {
        return this._radius;
    }

    set radius(radius: number | null) {
        this._radius = radius;
    }
}