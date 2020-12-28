type Matrix = any[][];

interface Options {
  excludeEmpty?: boolean;
}

/**
 * Tranposes a matrix by switching the row and column indices of a multidimensional array.
 */
export function transpose(matrix: Matrix, options: Options = {}): Matrix {
  const rowsCount = matrix.length;
  const output: Matrix = [];

  for (let r = 0; r < rowsCount; r++) {
    const row = matrix[r];
    const columnsCount = row.length;

    for (let c = 0; c < columnsCount; c++) {
      const item = row[c];
      output[c] = output[c] || [];
      if (options.excludeEmpty) {
        output[c].push(item);
      } else {
        output[c][r] = item;
      }
    }
  }

  return output;
}
