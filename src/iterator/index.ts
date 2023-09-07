/**
 * Iterator
 *
 * The data structure for handling an object's iteration is abstracted.
 * It's commonly used in libraries to handle collections of objects.
 */

import History from "./History"

const history = new History();

history.add("https://google.com");
history.add("https://apple.com");
history.add("https://amazon.com");

while (history.hasNext()) {
    console.log(history.next());
}