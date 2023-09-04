/**
 * Proxy
 *
 * Use this pattern when you need to lazy load an object (load only on
 * demand to save memory). You have a proxy object that acts as an agent.
 * An example would be Eloquent in Laravel. Client is dependant on and
 * deals with an interface Subject which is implemented by RealSubject
 * and Proxy. Proxy forwards operations to RealSubject.
 */

import EbookProxy from "./EbookProxy";
import Library from "./Library";

const library = new Library();

const fileNames = [
    "a",
    "b",
    "c",
    "d",
];

for (const fileName of fileNames) {
    library.add(new EbookProxy(fileName));
}

library.open("a");
library.open("c");
library.open("a");