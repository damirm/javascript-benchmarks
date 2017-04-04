'use strict';

const assert = require('assert');
const bench = require('./bench');

function testAssert() {
    try {
        assert(false, 'ha-ha');
    } catch (e) {}
}

function testThrow() {
    try {
        throw new Error('ha-ha');
    } catch (e) {}
}

const iters = 100;

bench('testAssert', testAssert, iters);
bench('testThrow', testAssert, iters);