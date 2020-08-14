const Matrix = Object.create(null);

// This is the empty matrix module which you are soon gonna complete.
// This module will be added on to throughout your tutorial activities and will
// be very useful in your mid term project and your final web app!

// These functions are initally made as block functions rather than arrow,
// you may change them to arrow functions if needed!

// When inputting or returning a matrix it is assumed that it has the following
// structure (doesn't need to be equal dimensions, i.e. can be 2x3 or 1x5, etc.)
// [
//     [el1, ..., eln],
//     [el1, ..., eln],
//     [el1, ..., eln],
//     [el1, ..., eln],
//     [el1, ..., eln],
// ]

// The first function has been done for you so you understand how to deal with
// the rows individually:
// - You can map the matrix to alter each row, and then map each row to alter
//   each element!

Matrix.multiply = (matrix, n) => matrix.map(
    (row) => row.map((el) => el * n)
);

Matrix.flatten = function (matrix) {

};

Matrix.generate = function (matrix, numRows, numCols) {

    // This function doesn't need to test whether the given matrix fits into
    // the given dimensions.

};

Matrix.flipHorizontal = function (matrix) {

};

Matrix.filterZeros = function (matrix) {


};

Matrix.findDeterminant = function (matrix) {

};

Matrix.sumMatrices = function (matrix1, matrix2) {

};

Matrix.transpose = function (matrix) {

};

export default Object.freeze(Matrix);