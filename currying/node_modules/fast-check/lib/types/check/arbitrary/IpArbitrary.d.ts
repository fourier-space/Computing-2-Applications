import { Arbitrary } from './definition/Arbitrary';
/**
 * For valid IP v4
 *
 * Following RFC 3986
 * https://tools.ietf.org/html/rfc3986#section-3.2.2
 */
declare function ipV4(): Arbitrary<string>;
/**
 * For valid IP v4 according to WhatWG
 *
 * Following WhatWG, the specification for web-browsers
 * https://url.spec.whatwg.org/
 *
 * There is no equivalent for IP v6 according to the IP v6 parser
 * https://url.spec.whatwg.org/#concept-ipv6-parser
 */
declare function ipV4Extended(): Arbitrary<string>;
/**
 * For valid IP v6
 *
 * Following RFC 3986
 * https://tools.ietf.org/html/rfc3986#section-3.2.2
 */
declare function ipV6(): Arbitrary<string>;
export { ipV4, ipV4Extended, ipV6 };
