import PointIcon from "./PointIcon";
import pointType from "./pointType";

export default class Point {
    constructor(
        protected _x: number,
        protected _y: number,
        protected _icon: PointIcon
        ) {
    }

    draw(): void {
        console.log(`${pointType[this._icon.pointType]} at ${this._x}, ${this._y}`);
    }
}