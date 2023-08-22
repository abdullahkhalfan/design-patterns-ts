/**
 * Facade
 *
 * Use this pattern when you have to write more than once a group of
 * objects and method calls that handle a particular service. It wraps
 * the multiple objects and method calls into a wrapper class, and
 * reduces coupling.
 */

import NotificationService from "./NotificationService";

NotificationService.send("Hello world", "user-id");
NotificationService.send("How are you?", "user-id");