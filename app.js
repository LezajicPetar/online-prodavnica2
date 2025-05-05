class Artikal{
    constructor(naziv, cena, opis){
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let listaArtikala = [new Artikal("Fenjer", 200, "Goriiiii"), new Artikal("Buzdovan", 2000, "Udriiiiiiii"), new Artikal("Frizbi", 10, "Baciiiii")]

function createArtikliRows(){
    let table = document.querySelector("#artikli")

    for(let i = 0; i < listaArtikala.length; i++){
        let tr = document.createElement('tr')

        let naziv = document.createElement('td')
        let cena = document.createElement('td')
        let rb = document.createElement('td')

        naziv.textContent = listaArtikala[i].naziv
        cena.textContent = listaArtikala[i].cena
        opis.textContent = listaArtikala[i].opis
        rb.textContent = i + 1

        tr.appendChild(rb)
        tr.appendChild(naziv)
        tr.appendChild(cena)

        table.appendChild(tr)
    }
}

document.addEventListener('DOMContentLoaded', createArtikliRows)