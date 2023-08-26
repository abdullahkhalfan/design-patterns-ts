/**
 * Decorator
 *
 * Transform an object in more than one way and optionally. It wraps
 * instances with other instances to transform an object.
 */

import CloudStream from "./CloudStream";
import CompressedStream from "./CompressedStream";
import EncryptedStream from "./EncryptedStream";

// The outer most wrapper will be the first to digest the data.
const stream = new EncryptedStream(
    new CompressedStream(
        new CloudStream()
    )
);

// Store a credit card.
stream.write("1234-5678-1234-5678")