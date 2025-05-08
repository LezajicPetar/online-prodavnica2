class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

function createArtikliRows() {
    let table = document.querySelector("#artikli")
    table.innerHTML = ''

    let artikliLocalStorage = JSON.parse(localStorage.getItem("artikliStorage"))

    for (let i = 0; i < artikliLocalStorage.length; i++) {
        let tr = document.createElement('tr')

        let naziv = document.createElement('td')
        let cena = document.createElement('td')
        let rb = document.createElement('td')

        naziv.textContent = artikliLocalStorage[i].naziv
        cena.textContent = artikliLocalStorage[i].cena
        rb.textContent = i + 1

        tr.appendChild(rb)
        tr.appendChild(naziv)
        tr.appendChild(cena)

        tr.addEventListener('click', function () {
            displayArtikldetails(artikliLocalStorage[i])
        })

        table.appendChild(tr)
    }
}

function displayArtikldetails(artikal) {
    let p = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')

    p.textContent = "Naziv: " + artikal.naziv
    p2.textContent = "Cena: " + artikal.cena
    p3.textContent = "Opis: " + artikal.opis

    let detalji = document.querySelector('#detalji')

    if (detalji.firstChild) {
        detalji.textContent = ''
    }

    detalji.appendChild(p)
    detalji.appendChild(p2)
    detalji.appendChild(p3)

    detalji.style.display = 'block'
}

function handleFormSubmisson() {
    let submitBtn = document.querySelector('#submitBtn')

    submitBtn.addEventListener('click', function () {
        let form = document.querySelector('#forma')
        let formData = new FormData(form)

        let naziv = formData.get('naziv')
        let cena = formData.get('cena')
        let opis = formData.get('opis')

        let artikliLocalStorage = JSON.parse(localStorage.getItem("artikliStorage"))
        artikliLocalStorage.push(new Artikal(naziv, cena, opis))
        localStorage.setItem("artikliStorage", JSON.stringify(artikliLocalStorage))

        createArtikliRows()
    })
}

function initializeArtikli() {
    handleFormSubmisson()
    createArtikliRows()
}

document.addEventListener('DOMContentLoaded', initializeArtikli)

