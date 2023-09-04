import WidgetFactory from "./WidgetFactory";

export default class ContactForm {
    render(widgetFactory: WidgetFactory): void {
        widgetFactory.createTextInput().render();
        widgetFactory.createButton().render();
    }
}
