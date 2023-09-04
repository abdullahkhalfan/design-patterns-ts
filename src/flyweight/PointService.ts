import Point from "./Point";
import PointIconFactory from "./PointIconFactory";
import pointType from "./pointType";

export default class PointService {
    getPoints(): Point[] {
        return [
            new Point(10, 30, PointIconFactory.getIcon(pointType.Cafe)),
            new Point(30, 25, PointIconFactory.getIcon(pointType.Restaurant)),
            new Point(28, 90, PointIconFactory.getIcon(pointType.Gym)),
            new Point(40, 50, PointIconFactory.getIcon(pointType.PetrolStation)),
            new Point(41, 26, PointIconFactory.getIcon(
                pointType.Restaurant)),
            new Point(11, 33, PointIconFactory.getIcon(pointType.Cafe))
        ];
    }
}