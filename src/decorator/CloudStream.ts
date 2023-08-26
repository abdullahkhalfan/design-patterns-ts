import Stream from "./Stream";

export default class CloudStream implements Stream {
    write(data: string): void {
        console.log(`Storing "${data}" in the cloud`);
    }
}