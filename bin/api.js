#!/usr/bin/env node

require('babel-register')({
  plugins: ['transform-es2015-modules-commonjs']
});

require('babel-polyfill');

require('../api/api');
