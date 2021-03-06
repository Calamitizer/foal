(function() {
    'use strict';

    const moo = require('moo');

    const rules = {

        // nothing
        none: /.\A/,

        // Dear foal,
        // hi: />f:/, // needs ^?

        space: /[ \t]/,

        // separation operator -
        // for demarking elements in a multiset
        sep: /,/,

        // a sequence of numerals
        number: /\d+/,

        // a "roll a die" operator -
        // mathematically speaking, a function from
        // { non-negative integers } -> [n]
        dee: /[dDxX]/,

        coin: /[cC]/,


        additiveOp: /[\+-]/,
        multiplicativeOp: /[\*\/]/,
        moduloOp: /%/,

        // sign: /\+-/,

        unaryOperator: /sum|count|min|max/,

        binaryOperator: /lowest|highest|sample/,

        comparison: /[><]=?|[!=]=/,

        ternaryThen: /\?/,

        ternaryElse: /:/,

        coallesce: /~/,

        bernoulli: /@/,

        endStatement: /;/,

        controlOperator: /[AR]\d*/,

        placeholder: /_\d*/,

        // Unary operators,
        // from MP(N) -> N
        // unop: /[=#+^vVzZ]/,


        // Delimiters ()[]{}
        parenLeft: /\(/,
        parenRight: /\)/,
        bracketLeft: /\[/,
        bracketRight: /\]/,
        braceLeft: /\{/,
        braceRight: /\}/,

        // a comment, always after the expression,
        // separated by :
        comment: /\/\/.*?$/,
    };

    // const rest = {
    //     // Whitespace, including newlines
    //     space: {
    //         match: /\s+/,
    //         lineBreaks: true,
    //     },
    //     // A non-negative integer
    //     n: /(?:0|[1-9]\d*)/,
    //     '=': '=', // identity
    //     '+': '+', // sum
    //     '^': '^', // max
    //     'v': 'v', // min
    //     '#': '#', // cardinality operator -
    //               // counts elements,
    //               // i.e. sum of zeroth powers
    //     'Z': 'Z', // zero operator
    //               // constant function returning 0
    //               // (the additive identity)
    // }

    const lexer = moo.compile(rules);

    module.exports = lexer;
})();
