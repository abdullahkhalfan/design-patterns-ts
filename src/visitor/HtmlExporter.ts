import HeadingNode from "./HeadingNode";
import ImageNode from "./ImageNode";
import NodeExporter from "./NodeExporter";

export default class HtmlExporter implements NodeExporter {
    exportHeadingNode(node: HeadingNode): void {
        console.log(`<h1>${node.value}</a>`);
    }

    exportImageNode(node: ImageNode): void {
        console.log(`<img alt="image" src="${node.source}">`);
    }
}