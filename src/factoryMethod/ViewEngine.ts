export default interface ViewEngine {
    render(fileName: string, data: any): string;
}