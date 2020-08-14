const Color = Object.create(null);

Color.noRed = function (arrayOfColors) {

    // To ensure immutability, create a new array and edit that.

    // The array will be in the form:
    //  [[rrr, ggg, bbb],
    //   [rrr, ggg, bbb],
    //   [rrr, ggg, bbb],
    //   ...
    //   [rrr, ggg, bbb]]

    return;
};

Color.rgbToHexColor = function (arrayRGB) {

    // The array will be in the form: [rrr, ggg, bbb]

    return;

    // The returned hex value must be in the following string format "#xxxxxx"

    // Tips:
    // - Think of how you could use the reduce method here!
    // - To convert to hex, you must turn every primary color value into hex
    //   (maybe you could create a new function that does this!)
};

Color.mixColors = function (arrayRGB1, arrayRGB2) {

    // The arrays will be in the form: [rrr, ggg, bbb]

    return;

    // The returned color must be in the format [rrr, ggg, bbb]

    // Tips:
    // - When two colors are mixed, you must find the average of the proportion
    //   of each color. For example, the color white [255, 255, 255], has 100%
    //   of all the colors, while black [0, 0, 0] has 0%.

};

Color.increaseBrightness = function(arrayRGB, brightnessChange) {

    // The array will be in the form [rrr, ggg, bbb]
    // The brightness will be expressed as a decimal (0 - 1)

    return;

    // The returned array must be in the format [rrr, ggg, bbb]

    // Tips:
    // - Increasing brightness simply means closer to white
    //   (what is the color white?)

};

/**
 * Learning Points:
 * - To do real investigations of how things work in real life and
 *   model them on code.
 * - To handle small arrays functionally.
 */

export default Object.freeze(Color);