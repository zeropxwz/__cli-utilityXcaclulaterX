"use strict";
function randomNumber(begin, end, type) {
    if (begin === undefined) {
        throw new Error('missing argument "begin"');
    }
    if (typeof begin !== 'number') {
        throw new Error('incorect argument "begin"');
    }
    if (end === undefined) {
        throw new Error('missing argument "end"');
    }
    if (typeof end !== 'number') {
        throw new Error('incorect argument "end"');
    }
    switch (type) {
        case 'int':
            return Math.ceil(Math.random() * (begin - end) + end) - 1;
        case 'float':
            return Math.random() * (begin - end) + end;
        case undefined:
            return Math.ceil(Math.random() * (begin - end) + end) - 1;
        default:
            throw new Error('incorect argument "type"');
    }
}
module.exports = randomNumber;
