const notesUtils = require('./notesUtils.js')
const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notesUtils.addNote(argv.title, argv.body)
    }
}).parse()

yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notesUtils.removeNotes(argv.title)
    }
}).parse()

yargs.command({
    command: 'load',
    describe: 'loading note',
   
    handler: function () {
        notesUtils.listNotes()
    }
}).parse()

yargs.command({
    command: 'read',
    describe: 'reading note',

    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
   
    handler: function (argv) {
        console.log(argv.title)
        notesUtils.readNotes(argv.title)
    }
}).parse()