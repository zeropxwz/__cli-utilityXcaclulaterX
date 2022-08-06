"use strict";
var readArguments = require('@zeropxwz/read-arguments');
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.parse = function () {
        for (var i = 0; i < this.args.length; i++) {
            if (i % 2 === 0) {
                this.operands.push(Number(this.args[i]));
            }
            else {
                this.operators.push(this.args[i]);
            }
        }
    };
    Calculator.calc = function () {
        for (var i = 0; i < this.operators.length; i++) {
            switch (this.operators[i]) {
                case '+':
                    this.result += this.operands[i];
                    break;
                case '-':
                    this.result -= this.operands[i];
                    break;
                case 'x':
                    this.result *= this.operands[i];
                    break;
                case '/':
                    this.result /= this.operands[i];
                    break;
                case 'init':
                    this.result = this.operands[i];
                    break;
                default:
                    console.error('error: unknow operator');
            }
        }
    };
    Calculator.exec = function () {
        this.parse();
        this.calc();
        console.log(this.result);
    };
    Calculator.args = readArguments(process.argv);
    Calculator.operands = [];
    Calculator.operators = ['init'];
    Calculator.result = 0;
    return Calculator;
}());
Calculator.exec();
