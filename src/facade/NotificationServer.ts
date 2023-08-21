import AuthToken from "./AuthToken";
import Connection from "./Connection";
import Message from "./Message";

class NotificationServer {

    connect(ip: string): Connection {
        return new Connection(ip);
    }

    authenticate(appId: string, key: string): AuthToken {
        return new AuthToken;
    }

    send(authToken: AuthToken, message: Message, destination: string) {
        console.log(`Sending message "${message.getContent()}" to ${destination}`)
    }
}

export default new NotificationServer();