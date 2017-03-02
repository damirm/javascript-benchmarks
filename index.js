'use strict';

const path = require('path');

const benchs = [
    'assign',
    'foreach',
    'push',
    'template'
];

benchs.forEach(bench => {
    console.log(`${bench}:`);
    console.log(``);

    require(path.join(__dirname, bench));

    console.log(``);
    console.log(`=============`);
    console.log(``);
});
