import pointType from "./pointType";

export default class PointIcon {
    constructor(
        protected _pointType: pointType,
        protected _icon: string
    ) {
    }

    get pointType(): pointType {
        return this._pointType;
    }

    get icon(): string {
        return this._icon;
    }
}