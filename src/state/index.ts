import Canvas from "./Canvas";
import EraserTool from "./EraserTool";
import SelectionTool from "./SelectionTool";

const canvas = new Canvas();

canvas.setTool(new SelectionTool);
canvas.setTool(new EraserTool);

// Simulating user event...
canvas.mouseDown();
canvas.mouseUp();