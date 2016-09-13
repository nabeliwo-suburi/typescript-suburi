import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [
    npm({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
    commonjs(), // CommonJSモジュールをES6に変換
    babel() // ES5に変換
  ]
};
