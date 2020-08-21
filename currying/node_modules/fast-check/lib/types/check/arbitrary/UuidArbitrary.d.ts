import { Arbitrary } from './definition/Arbitrary';
/**
 * For UUID from v1 to v5
 *
 * According to RFC 4122 - https://tools.ietf.org/html/rfc4122
 *
 * No mixed case, only lower case digits (0-9a-f)
 */
export declare function uuid(): Arbitrary<string>;
/**
 * For UUID of a given version (in v1 to v5)
 *
 * According to RFC 4122 - https://tools.ietf.org/html/rfc4122
 *
 * No mixed case, only lower case digits (0-9a-f)
 */
export declare function uuidV(versionNumber: 1 | 2 | 3 | 4 | 5): Arbitrary<string>;
