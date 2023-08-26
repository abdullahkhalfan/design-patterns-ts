/**
 * Prototype
 *
 * Use this pattern when you need to create a new object by copying an
 * existing one. You would typically introduce a "clone" method to the
 * class that knows everything about itself.
 */

import Circle from "./Circle";
import ContextMenu from "./ContextMenu";

const circle1 = new Circle();

circle1.radius = 3.5;
console.log("Circle 1 radius:", circle1.radius);

const circle2 = <Circle>ContextMenu.duplicate(circle1);

console.log("Circle 2 radius:", circle2.radius);

circle1.radius = 4.5;
console.log("Circle 1 radius:", circle1.radius);
console.log("Circle 2 radius:", circle2.radius);
