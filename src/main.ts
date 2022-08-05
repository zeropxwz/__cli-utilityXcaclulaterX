const readArguments = require('@zeropxwz/read-arguments')



const args: string[] = readArguments(process.argv)



function calc (): void {

    var number: number = NaN
    var action: string = ''

    var result: number = 0

    for (let i = 0; i < args.length; i++) {

        if (i % 2 === 0) {
            number = Number(args[i])

            switch (action) {
                case '+':
                    result += number
                    break
                case '-':
                    result -= number
                    break
                case 'x':
                    result *= number
                    break
                case '/':
                    result /= number
                    break


                case '':
                    result = number
                    break
                default:
                    console.error('error: unknow operator')
                    return
            }
        }

        if (i % 2 === 1) {
            action = args[i]
        }
    }

    console.log(result)
}
calc()