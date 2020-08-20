// Given a string representing a matrix of numbers, return the rows and columns
// of that matrix.

// psuedo-classic approach with functional programming
export class Matrix {
  constructor(matrix) {

    this.row = matrix.split("\n").map(value => value.split(" ").map(Number));
    this.column = this.row[0].map((_, index) => this.row.map(value => value[index]));

    return {
      rows: this.row,
      columns: this.column
    }
  }
}

// functional approach

export const matrixConstructor = function (matrix) {
  const row = matrix.split("\n").map(value => value.split(" ").map(Number));
  const column = row[0].map((_, index) => this.row.map(value => value[index]));
  return {
    rows: row,
    columns: column
  }
}
