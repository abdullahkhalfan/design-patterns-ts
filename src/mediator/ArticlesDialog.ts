import Button from "./Button";
import DialogBox from "./Dialog";
import Selector from "./Selector";
import TextInput from "./TextInput";
import UIControl from "./UIControl";

export default class ArticlesDialog implements DialogBox {
    saveButton = new Button(this);
    articlesSelector = new Selector(this);
    titleInput = new TextInput(this);

    handleChange(control: UIControl): void {
        if (control instanceof TextInput) {
            this.handleTitleChanged();
        }
        else if (control instanceof Selector) {
            this.handleArticleChanged();
        }
    }

    protected handleTitleChanged(): void {
        this.saveButton.isEnabled = !!this.titleInput.val;
    }

    protected handleArticleChanged(): void {
        if (this.articlesSelector.selected) {
            this.titleInput.val = this.articlesSelector.selected;
            this.saveButton.isEnabled = true;
        }
        else {
            this.saveButton.isEnabled = false;
        }
    }
}