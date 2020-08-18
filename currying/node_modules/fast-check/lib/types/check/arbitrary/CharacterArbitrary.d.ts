import { Arbitrary } from './definition/Arbitrary';
/**
 * For single printable ascii characters - char code between 0x20 (included) and 0x7e (included)
 * @see https://www.ascii-code.com/
 */
declare function char(): Arbitrary<string>;
/**
 * For single hexadecimal characters - 0-9 or a-f
 */
declare function hexa(): Arbitrary<string>;
/**
 * For single base64 characters - A-Z, a-z, 0-9, + or /
 */
declare function base64(): Arbitrary<string>;
/**
 * For single ascii characters - char code between 0x00 (included) and 0x7f (included)
 */
declare function ascii(): Arbitrary<string>;
/**
 * For single characters - all values in 0x0000-0xffff can be generated
 *
 * WARNING:
 *
 * Some generated characters might appear invalid regarding UCS-2 and UTF-16 encoding.
 * Indeed values within 0xd800 and 0xdfff constitute surrogate pair characters and are illegal without their paired character.
 */
declare function char16bits(): Arbitrary<string>;
/**
 * For single unicode characters defined in the BMP plan - char code between 0x0000 (included) and 0xffff (included) and without the range 0xd800 to 0xdfff (surrogate pair characters)
 */
declare function unicode(): Arbitrary<string>;
/**
 * For single unicode characters - any of the code points defined in the unicode standard
 *
 * WARNING: Generated values can have a length greater than 1.
 *
 * @see https://tc39.github.io/ecma262/#sec-utf16encoding
 */
declare function fullUnicode(): Arbitrary<string>;
export { char, ascii, char16bits, unicode, fullUnicode, hexa, base64 };
