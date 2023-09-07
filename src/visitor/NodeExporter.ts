import HeadingNode from "./HeadingNode";
import ImageNode from "./ImageNode";

export default interface NodeExporter {
    /**
     * Method overloading isn't supported in TypeScript, it only exists for
     * functions. If it was supported, we could have a single method name here
     * with different signatures.
     */
    exportHeadingNode(node: HeadingNode): void;
    exportImageNode(node: ImageNode): void;
}