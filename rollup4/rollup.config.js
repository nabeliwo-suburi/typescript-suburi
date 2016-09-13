import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/calculator.js',
  dest: 'calculator.js',
  moduleName: 'Calculator',
  plugins: [
    babel({
      babelrc: false,
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      presets: ["react", "es2015-rollup"]
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
