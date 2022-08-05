"use strict";
const readArguments = require('@zeropxwz/read-arguments');
class Calculator {
    static parse() {
        for (let i = 0; i < this.args.length; i++) {
            if (i % 2 === 0) {
                this.operands.push(Number(this.args[i]));
            }
            else {
                this.operators.push(this.args[i]);
            }
        }
    }
    static calc() {
        for (let i = 0; i < this.operators.length; i++) {
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
    }
    static exec() {
        Calculator.parse();
        Calculator.calc();
        console.log(this.result);
    }
}
Calculator.args = readArguments(process.argv);
Calculator.operands = [];
Calculator.operators = ['init'];
Calculator.result = 0;
Calculator.exec();
// function calc (): void {
//     const args: string[] = readArguments(process.argv)
//     var number: number = NaN
//     var action: string = ''
//     var result: number = 0
//     for (let i = 0; i < args.length; i++) {
//         if (i % 2 === 0) {
//             number = Number(args[i])
//             switch (action) {
//                 case '+':
//                     result += number
//                     break
//                 case '-':
//                     result -= number
//                     break
//                 case 'x':
//                     result *= number
//                     break
//                 case '/':
//                     result /= number
//                     break
//                 case '':
//                     result = number
//                     break
//                 default:
//                     console.error('error: unknow operator')
//                     return
//             }
//         }
//         if (i % 2 === 1) {
//             action = args[i]
//         }
//     }
//     console.log(result)
// }
// calc()
