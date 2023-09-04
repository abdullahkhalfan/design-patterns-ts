import PointIcon from "./PointIcon";
import pointType from "./pointType";

export default class PointIconFactory {
    protected static _icons: { [key in pointType]?: PointIcon; } = {};

    static getIcon(pointType: pointType): PointIcon {
        if (!this._icons[pointType]) {
            this._icons[pointType] = new PointIcon(pointType, "");
        }

        return this._icons[pointType] as PointIcon;
    }
}