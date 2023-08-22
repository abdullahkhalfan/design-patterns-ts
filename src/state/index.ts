/**
 * State
 *
 * You have an object that behaves differently when its state changes.
 * It uses polymorphism to acheive this behaviour.
 */

import Canvas from "./Canvas";
import EraserTool from "./EraserTool";
import SelectionTool from "./SelectionTool";

const canvas = new Canvas();

canvas.setTool(new SelectionTool);
canvas.setTool(new EraserTool);

// Simulating user event...
canvas.mouseDown();
canvas.mouseUp();