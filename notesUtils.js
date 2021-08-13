const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title , boby){
    const notes = loadNotes()
    const dup = notes.filter(function(note)
    {
        return note.title === title
    })

    if(dup.length === 0){
        notes.push({
            title:title,
            body:boby
        })
        saveNotes(notes)
        console.log('notes added')
       
    }else{
        console.log('notes not added')
    }
}

const saveNotes = function(note){
    const data = JSON.stringify(note)
    fs.writeFileSync('notes.json',data)
}
const loadNotes = function(){
   try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);

   } 
   catch(e){
       return []
   }
}

const removeNotes = function(title){
    const all = loadNotes()
    const notRemove = all.filter(function(note){
        return note.title!=title
    })
    if(notRemove.length!=0){
         saveNotes(notRemove)
         console.log('removed')}
    else
         console.log(' not ter to removed')


}


const listNotes = () =>{
    const all = loadNotes()
     console.log(chalk.inverse.white('Notes'))
    
     all.forEach((all) =>{
         console.log(all.title)
     })

}

const readNotes = (title) =>{
    const all = loadNotes()
    const read = all.filter((note)=>{
        return note.title===title
    })
    const read1 = all.find((note)=>{
        return note.title === title
    })
    if(read.length===0){
        console.log(chalk.inverse.read('Notes not found'))
    }else{
        console.log(read1.body)
        console.log(chalk.inverse.white(read1.body))
    }

}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}