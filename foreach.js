'use strict';

const _ = require('lodash');
const bench = require('./bench');

function nativeFor(arr) {
    for (let i = arr.length - 1; i >= 0; --i) {

    }
}

function nativeWhile(arr) {
    let i = arr.length;

    while (i) {
        --i;
    }
}

function nativeReduce(arr) {
    arr.reduce(() => {}, null);
}

function map(arr) {
    arr.map(() => {});
}

function foreach(arr) {
    arr.forEach(() => {});
}

function lodashMap(arr) {
    _.map(arr, () => {});
}

function lodashForeach(arr) {
    _.forEach(arr, () => {});
}

const args = [new Array(100000)];
const iters = 1;

bench('for', nativeFor, iters, args);
bench('while', nativeWhile, iters, args);
bench('Array.prototype.reduce', nativeReduce, iters, args);
bench('Array.prototype.map', map, iters, args);
bench('Array.prototype.forEach', foreach, iters, args);
bench('_.map', lodashMap, iters, args);
bench('_.forEach', lodashForeach, iters, args);

/*
for: 0.792ms
while: 0.356ms
Array.prototype.reduce: 25.021ms
Array.prototype.map: 20.978ms
Array.prototype.forEach: 18.078ms
_.map: 2.352ms
_.forEach: 3.180ms
*/