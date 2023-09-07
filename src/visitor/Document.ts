import Node from "./Node";
import NodeExporter from "./NodeExporter";

export default class Document {
    protected _nodes: Node[] = [];

    add(node: Node) {
        this._nodes.push(node);
    }

    export(exporter: NodeExporter) {
        for (const node of this._nodes) {
            node.export(exporter);
        }
    }
}