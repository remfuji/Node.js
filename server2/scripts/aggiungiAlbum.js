async function aggiungiAlbum() {

    let res = await fetch('http://localhost:3000/categorie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        album: "dicembre",
        images:[
          {
            link: "https://mammamogliedonna.it/wp-content/uploads/2017/12/Benvenuto-Dicembre-768x432.jpg"
          }
        ] 
        
      })
    })
    let text = await res.text()
    console.log(res.status)
  
  }
  aggiungiAlbum()