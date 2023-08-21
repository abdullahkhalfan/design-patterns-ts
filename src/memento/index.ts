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