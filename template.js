'use strict';

function bench(title, fn, n, args) {
    console.time(title);

    for (let i = 0; i < n; ++i) {
        fn.apply(null, args);
    }

    console.timeEnd(title);
}

function testConcat(a, b, c) {
    return 'a = ' + a + ', b = ' + b + ', c = ' + c;
}

function testTemplate(a, b, c) {
    return `a = ${a}, b = ${b}, c = ${c}`;
}

function testJoin(a, b, c) {
    return ['a = ', a, ', b = ', b, ', c = ', c].join();
}

const args = [1, 2, 3];

const iters = 100;

bench('testConcat', testConcat, iters, args);
bench('testTemplate', testTemplate, iters, args);
bench('testJoin', testJoin, iters, args);

/*
testConcat: 0.173ms
testTemplate: 0.073ms
testJoin: 0.300ms
*/