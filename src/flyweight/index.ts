/**
 * Flyweight
 *
 * Reduce memory usage by creating a "flyweight" object that is shareable.
 */

import PointService from "./PointService";

const pointService = new PointService();

for (const point of pointService.getPoints()) {
    point.draw();
}