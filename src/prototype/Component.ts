export default interface Component {
    render(): void;

    /**
     * The component dicates how it should be cloned.
     */
    clone(): Component;
}