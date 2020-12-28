import { transpose } from '.';

describe('transpose', () => {
  it('does nothing when first argument is empty array', () => {
    expect(transpose([])).toEqual([]);
  });

  it.each([
    /* eslint-disable no-sparse-arrays */
    // 0
    [[[1], [2]], [[1, 2]]],

    // 1
    [[[1, 2]], [[1], [2]]],

    // 2
    [
      [[1], [2, 3]],
      [
        [1, 2],
        [, 3],
      ],
    ],

    // 3
    [
      [[1], [2, 3], [], [4, 5, 6]],
      [
        [1, 2, , 4],
        [, 3, , 5],
        [, , , 6],
      ],
    ],

    // 4
    [
      [
        [1, 2],
        [3, 4],
      ],
      [
        [1, 3],
        [2, 4],
      ],
    ],

    // 5
    [
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      [
        [1, 3, 5],
        [2, 4, 6],
      ],
    ],

    // 6
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ],
    ],
    /* eslint-enable no-sparse-arrays */
  ])('switches the row and column indices', (matrix, expected) => {
    expect(transpose(matrix)).toEqual(expected);
  });

  describe('with options.excludeEmpty=true', () => {
    it('excludes empty items', () => {
      const matrix = [[1], [2, 3], [], [4, 5, 6]];
      const expected = [[1, 2, 4], [3, 5], [6]];
      expect(transpose(matrix, { excludeEmpty: true })).toEqual(expected);
    });
  });
});
