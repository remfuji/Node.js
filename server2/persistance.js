const fs = require('node:fs/promises')
let ultimoId = 1
let ultimoIdImmagine = 2

async function selectAll(){
    let contents = await (await fs.readFile('./db.json'))
    let contentsAsString= contents.toString()
    let album = JSON.parse(contentsAsString)
    return album
}

function nextId(){

    ultimoId += 1
    return ultimoId
}
async function insert(album){
    let Newalbum = await selectAll()
    categorie.push(newAlbum)
    await fs.writeFile('./db.json', JSON.stringify(album))
}

module.exports = {
    selectAll,
    insert
}
//    newAlbum.id = ultimoId
//newAlbum.images.map((image) => {ultimoIdImmagine+=1; image.id = ultimoIdImmagine}) 