import Node from "./Node";
import NodeExporter from "./NodeExporter";

export default class HeadingNode implements Node {
    constructor(protected _value: string) {
    }

    get value(): string {
        return this._value;
    }

    export(exporter: NodeExporter): void {
        exporter.exportHeadingNode(this);
    }
}