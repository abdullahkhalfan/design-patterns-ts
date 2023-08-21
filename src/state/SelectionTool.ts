import Tool from "./Tool";

export default class SelectionTool implements Tool {

    mouseUp() {
        console.log("Used selection tool");
    }

    mouseDown() {
        console.log("Selecting...");
    }
}