export default class Config {

    protected _settings: { [key: string]: string; } = {};
    protected static _instance: Config | null = null;

    /**
     * Prevent this class from being instantiated outside of
     * this class.
     */
    private constructor() {
    }

    static getInstance(): Config {
        if (!this._instance) {
            this._instance = new this();
        }

        return this._instance;
    }

    add(key: string, val: string): void {
        this._settings[key] = val;
    }

    get(key: string): string | undefined {
        return this._settings[key];
    }
}