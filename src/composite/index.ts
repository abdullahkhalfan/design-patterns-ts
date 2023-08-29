/**
 * Composite
 *
 * Treat objects in a hierarchy in the same way. E.g. file system with
 * folders and files, where folders can have subfolders and files.
 */

import Group from "./Group";
import Shape from "./Shape";

const group1 = new Group();
group1.add(new Shape()); // Pretend it's some square.
group1.add(new Shape()); // Pretend it's some square.

const group2 = new Group();
group2.add(new Shape()); // Pretend it's some circle.
group2.add(new Shape()); // Pretend it's some circle.

const groupOfGroups = new Group();
groupOfGroups.add(group1);
groupOfGroups.add(group2);

groupOfGroups.render();
groupOfGroups.move();