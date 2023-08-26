/**
 * Singleton
 *
 * Ensure a class only has a single instance. Typically used for stuff like
 * logging, settings, caching, etc.
 *
 * Note: In JavaScript, there's a much easier alternative to the approach
 * demonstrated. In Config.ts just export a new instance of the object, so
 * when imported only that single instance can be used.
 */

import Config from "./Config";

const config1 = Config.getInstance();
config1.add("url", "https://some.test");

const config2 = Config.getInstance();

console.log('Same memory location:', config2 === config1);
console.log(config2.get("url"));