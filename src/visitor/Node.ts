import NodeExporter from "./NodeExporter";

export default interface Node {
    /**
     * A double dispatcher
     */
    export(exporter: NodeExporter): void;
}