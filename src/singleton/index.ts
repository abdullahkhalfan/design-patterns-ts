/**
 * Singleton
 *
 * Ensure a class only has a single instance. Typically used for stuff like
 * logging, settings, caching, etc.
 */

import Config from "./Config";

const config1 = Config.getInstance();
config1.add("url", "https://some.test");

const config2 = Config.getInstance();

console.log(config2 === config1); // Same location in memory
console.log(config2.get("url"));