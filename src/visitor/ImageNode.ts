import Node from "./Node";
import NodeExporter from "./NodeExporter";

export default class ImageNode implements Node {
    constructor(protected _source: string) {
    }

    get source(): string {
        return this._source;
    }

    export(exporter: NodeExporter): void {
        exporter.exportImageNode(this);
    }
}