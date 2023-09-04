import Widget from "./Widget";

export default interface WidgetFactory {
    createTextInput(): Widget;
    createButton(): Widget;
}