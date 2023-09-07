/**
 * Visitor
 *
 * Add logic to an existing hierarchy of classes without modifying them directly.
 * The added behaviour is separated from the classes the behaviour operates on.
 * Use only if the object structure is stable. Double dispatch is used and it lies
 * at the core of this pattern.
 */

import Document from "./Document";
import HeadingNode from "./HeadingNode";
import HtmlExporter from "./HtmlExporter";
import ImageNode from "./ImageNode";

const document = new Document();

document.add(new HeadingNode("A nice and meaningful heading"));
document.add(new ImageNode("https://some.path"));

document.export(new HtmlExporter());