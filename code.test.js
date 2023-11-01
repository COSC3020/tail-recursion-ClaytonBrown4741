const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const fibbTest =
    jsc.forall("nat", function(n) {
        return (n >= 40) || (nonRecursiveFib(n) === tailRecursion(n))
    });

jsc.assert(fibbTest);
