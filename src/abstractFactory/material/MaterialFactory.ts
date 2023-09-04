import Widget from "../Widget";
import WidgetFactory from "../WidgetFactory";
import MaterialButton from "./MaterialButton";
import MaterialTextInput from "./MaterialTextInput";

export default class MaterialFactory implements WidgetFactory {
    createTextInput(): Widget {
        return new MaterialTextInput();
    }

    createButton(): Widget {
        return new MaterialButton();
    }
}