'use strict';

function bench(title, fn, n, args) {
    console.time(title);

    for (let i = 0; i < n; ++i) {
        fn.apply(null, args);
    }

    console.timeEnd(title);
}

module.exports = bench;