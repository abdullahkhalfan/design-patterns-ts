/**
 * Memento
 *
 * A classic pattern to handle undo mechanisms. You have a caretaker (stores
 * list of states and add and removes), a memento (state itself), and originator
 * (creates states, restores to a state). We store snapshots in the state.
 */

import Editor from "./Editor";
import EditorState from "./EditorState";
import History from "./History";


const editor = new Editor();
const history = new History();

editor.content = "a";
history.push(editor.createState());

editor.content = "b";
history.push(editor.createState());

editor.content = "c";
history.push(editor.createState());

// Let's undo now.

history.pop();

editor.restoreState(history.pop() as EditorState);

console.log(editor.content);