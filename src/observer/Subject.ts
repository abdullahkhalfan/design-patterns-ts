import Observer from "./Observer";

export default abstract class Subject {
    protected _observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this._observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const i = this._observers.indexOf(observer);

        if (i) {
            this._observers.splice(i, 1);
        }
    }

    notifyObservers(): void {
        for (let observer of this._observers) {
            observer.update();
        }
    }
}