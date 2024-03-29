# matrix-transpose

[![NPM](https://nodei.co/npm/matrix-transpose.png)](https://nodei.co/npm/matrix-transpose/)

[![NPM version](https://img.shields.io/npm/v/matrix-transpose.svg)](https://www.npmjs.com/package/matrix-transpose)
[![Build Status](https://github.com/remarkablemark/matrix-transpose/workflows/build/badge.svg?branch=master)](https://github.com/remarkablemark/matrix-transpose/actions?query=workflow%3Abuild)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/matrix-transpose/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/matrix-transpose?branch=master)

[Transposes](https://wikipedia.org/wiki/Transpose) a matrix by switching the row and column indices of a multidimensional array:

```
transpose(array)
```

In other words, it flips a matrix over its diagonal. Inspired by the [Replit](https://replit.com/@remarkablemark/Swap-array-row-and-column).

#### Example

```js
const { transpose } = require('matrix-transpose');

transpose([
  [1, 2],
  [3, 4],
  [5, 6],
]);
```

Output:

```json
[
  [1, 3, 5],
  [2, 4, 6]
]
```

[Replit](https://replit.com/@remarkablemark/matrix-transpose) | [JSFiddle](https://jsfiddle.net/remarkablemark/c5upm1bz/)

## Install

[NPM](https://www.npmjs.com/package/matrix-transpose):

```sh
npm install matrix-transpose --save
```

[Yarn](https://yarnpkg.com/package/matrix-transpose):

```sh
yarn add matrix-transpose
```

[CDN](https://unpkg.com/matrix-transpose/):

```html
<script src="https://unpkg.com/matrix-transpose@latest/umd/matrix-transpose.min.js"></script>
<script>
  window.MatrixTranspose.transpose(/* array */);
</script>
```

## Usage

Import module:

```js
// ES Modules
import { transpose } from 'matrix-transpose';

// CommonJS
const { transpose } = require('matrix-transpose');
```

Transpose matrix:

```js
transpose([
  [1, 2],
  [3, 4],
  [5, 6],
]);
```

Output:

```json
[
  [1, 3, 5],
  [2, 4, 6]
]
```

Transpose matrix with inconsistent column lengths:

```js
transpose([[1], [2, 3], [4, 5, 6]]);
```

Output:

```json
[
  [1, 2, 4],
  [, 3, 5],
  [, , 6]
]
```

### Options

#### excludeEmpty

When option `excludeEmpty` is set to `true`, then empty items are excluded:

```js
transpose([[1], [2, 3], [4, 5, 6]], { excludeEmpty: true });
```

Output:

```json
[[1, 2, 4], [3, 5], [6]]
```

## Testing

Run tests with coverage:

```sh
npm test
```

Run tests in watch mode:

```sh
npm run test:watch
```

Lint files:

```sh
npm run lint
```

Fix lint errors:

```sh
npm run lint:fix
```

## Release

Release and publish are automated by [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/remarkablemark/matrix-transpose/blob/master/LICENSE)
