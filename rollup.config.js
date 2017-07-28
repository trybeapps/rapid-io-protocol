'use strict'

const buble = require('rollup-plugin-buble')
const commonjs = require('rollup-plugin-commonjs')

const pkg = require('./package.json')

module.exports = {
  entry: 'lib/index.js',
  dest: 'dist/bundle.js',
  external: Object.keys(pkg.dependencies),
  moduleName: 'rapid-io-protocol',
  format: 'cjs',
  plugins: [
    commonjs({
      exclude: ['node_modules/']
    }),
    buble()
  ]
}
