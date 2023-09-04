import Widget from "../Widget";
import WidgetFactory from "../WidgetFactory";
import AntButton from "./AntButton";
import AntTextInput from "./AntTextInput";

export default class AntFactory implements WidgetFactory {
    createTextInput(): Widget {
        return new AntTextInput();
    }

    createButton(): Widget {
        return new AntButton();
    }
}