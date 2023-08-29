import Component from "./Component";

export default class Shape implements Component {
    render(): void {
        console.log("Render shape");
    }

    move(): void {
        console.log("Move shape");
    }
}