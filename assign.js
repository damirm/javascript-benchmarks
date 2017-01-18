'use strict';

const _ = require('lodash');

function bench(title, fn, n, args) {
    console.time(title);

    for (let i = 0; i < n; ++i) {
        fn.apply(null, args);
    }

    console.timeEnd(title);
}

function testObjectAssign(a, b, c) {
    return Object.assign({}, a, b, c);
}

function testLodashAssign(a, b, c) {
    return _.assign({}, a, b, c);
}

const args = [
    { a: 1, b: 2, c: 3, d: 4 },
    { a: 2, b: 3, c: 4, d: 5, e: 6 },

    (Array.apply(null, {length: 100}).map(Number.call, Number)).reduce((acc, next) => {
        acc[next] = next;

        return acc;
    }, {})
];

bench('testObjectAssign', testObjectAssign, 100000, args);
bench('testLodashAssign', testLodashAssign, 100000, args);

/*
testObjectAssign: 2063.759ms
testLodashAssign: 2894.253ms
*/