const chalk = require('chalk')
const notes = require('./util.js')
const yargs = require('yargs')
// //const name = 'rajat'

// console.log(chalk.green.bgRed.bold('rajat'))
// const note = notes()


// console.log(note)

// console.log(process.argv[2])

// const command = process.argv[2]

// if(command == 'add'){
//     console.log('adding into notes')
// }

console.log(yargs.argv)


yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'adding notes into file',
    builder:{
        title:{
            describe:'notes title',
            demandOption:true
        }
    },
    handler:function(argv){
        console.log('adding.........' ,argv)
    }
}).parse()

