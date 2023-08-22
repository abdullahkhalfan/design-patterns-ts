import Authenticator from "./Authenticator";
import Compressor from "./Compressor";
import HttpRequest from "./HttpRequest";
import Logger from "./Logger";

// Our chain or pipeline will be in the following order:
// Authenticator -> Logger -> Compressor
const compressor = new Compressor();
const logger = new Logger(compressor);
const authenticator = new Authenticator(logger);

authenticator.handle(new HttpRequest("admin", "12345678"));
authenticator.handle(new HttpRequest("fakeuser", "12345"));