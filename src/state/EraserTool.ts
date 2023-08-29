import Tool from "./Tool";

export default class EraserTool implements Tool {
    mouseUp() {
        console.log("Used eraser tool");
    }

    mouseDown() {
        console.log("Erasing...");
    }
}