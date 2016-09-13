import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/calculator.js',
  dest: 'calculator.js',
  format: 'umd',
  moduleName: 'Calculator',
  plugins: [babel()]
};
