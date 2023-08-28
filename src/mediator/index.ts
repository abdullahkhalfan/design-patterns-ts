/**
 * Mediator
 *
 * Objects need to talk to each other. You have a mediator class that
 * handles all the interaction between various objects, they only know
 * about their mediator but they don't know about the other objects
 * that are affected by a change. The Observer pattern can be used
 * instead of the Mediator pattern to minimise the handling of the
 * types of interaction (event handling in GUIs is done this way).
 */

import ArticlesDialog from "./ArticlesDialog";

const articlesDialog = new ArticlesDialog();

// Simulation

// 1. User selects the first article.
articlesDialog.articlesSelector.selected = "Article 1";
// 2. User clears the input.
articlesDialog.titleInput.val = "";
// 3. User changes the title to something amazing.
articlesDialog.titleInput.val = "Some Amazing Article 1";

console.log("Selector:", articlesDialog.articlesSelector.selected);
console.log("Title Input:", articlesDialog.titleInput.val);
console.log("Save Button:", articlesDialog.saveButton.isEnabled);
