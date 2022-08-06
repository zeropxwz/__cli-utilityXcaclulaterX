const readArguments = require('@zeropxwz/read-arguments')

class Calculator {

    static readonly args: Array<string> = readArguments(process.argv)

    static operands:  Array<number> = []
    static operators: Array<string> = ['init']

    static result:    number = 0

    static parse () {

        for (let i = 0; i < this.args.length; i++)  {
            
            if (i % 2 === 0) {
                this.operands.push(Number(this.args[i]))
            }
            else {
                this.operators.push(this.args[i])
            }

        }
    }

    static calc () {
        for (let i = 0; i < this.operators.length; i++) {

            switch (this.operators[i]) {
                case '+':
                    this.result += this.operands[i]
                    break
                case '-':
                    this.result -= this.operands[i]
                    break
                case 'x':
                    this.result *= this.operands[i]
                    break
                case '/':
                    this.result /= this.operands[i]
                    break

                case 'init':
                    this.result = this.operands[i]
                    break
                default:
                    console.error('error: unknow operator')
            }
            
        }
    }

    static exec() {
        Calculator.parse()
        Calculator.calc()

        console.log(this.result)
    }
}

Calculator.exec()
