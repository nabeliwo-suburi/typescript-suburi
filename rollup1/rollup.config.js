import typescript from 'rollup-plugin-typescript';

export default {
  entry: './src/ts/app.ts',
  dest: './dist/app.js',
  format: 'es',
  plugins: [
    typescript()
  ]
};
