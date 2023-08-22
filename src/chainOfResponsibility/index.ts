/**
 * Chain of Responsibility
 *
 * This pattern is used in frameworks like Laravel to deal with Middleware.
 * Each object only knows about the next object in the chain. It calls the
 * first processor and then there's a next() method to keep continuing, whilst
 * being able to break the chain. Can use the Template Method pattern in the
 * handlers.
 */

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