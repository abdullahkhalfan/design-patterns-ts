import Tool from './Tool';

export default class Canvas {
    protected _tool?: Tool;

    setTool(tool: Tool): void {
        this._tool = tool;
    }

    mouseDown(): void {
        this._tool?.mouseDown();
    }

    mouseUp(): void {
        this._tool?.mouseUp();
    }
}