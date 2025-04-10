import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

/**
 * Build rollup config for development (default) or production (minify = true).
 *
 * @param {Boolean} [minify=false]
 * @return {Object}
 */
const config = (minify = false) => ({
  input: 'src/index.ts',
  output: {
    file: `umd/matrix-transpose${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'MatrixTranspose',
    sourcemap: true,
  },
  plugins: [typescript({ module: 'es2015' }), minify && terser()],
});

export default [config(), config(true)];
