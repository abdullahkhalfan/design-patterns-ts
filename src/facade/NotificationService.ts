import Message from "./Message";
import notificationServer from "./NotificationServer";

/**
 * Facade
 */
export default class NotificationService {

    public static send(message: string, destination: string): void {

        const connection = notificationServer.connect("0.0.0.0");

        const authToken = notificationServer.authenticate("my-app-id", "abcdefg");

        notificationServer.send(authToken, new Message(message), destination);

        connection.disconnect();
    }
}