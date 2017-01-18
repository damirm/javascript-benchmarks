'use strict';

function bench(title, fn, n, args) {
    console.time(title);

    for (let i = 0; i < n; ++i) {
        fn.apply(null, args);
    }

    console.timeEnd(title);
}

function push1(n) {
    const result = [];
    const arr = Array.from({ length: n }, (v, k) => k);

    result.push.apply(result, arr);
}

function push2(n) {
    const result = [];
    const arr = Array.from({ length: n }, (v, k) => k);

    arr.forEach(v => result.push(v));
}

const args = [10000];
const iters = 1000;

bench('push1', push1, iters, args);
bench('push2', push2, iters, args);

/*
push1: 1468.247ms
push2: 1875.181ms
*/