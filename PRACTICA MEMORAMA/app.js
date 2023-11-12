const seleccion = {
    juntarContainer: document.querySelector('.contenedor-juntar'),
    juntar: document.querySelector('.juntar'),
    movimientos: document.querySelector('.movimientos'),
    timer: document.querySelector('.timer'),
    empezar: document.querySelector('button'),
    ganar: document.querySelector('.ganar')
}

const estado = {
    juegoIniciado: false,
    tarjetasVolteadas: 0,
    volteosTotales: 0,
    tiempoTotal: 0,
    bucle: null
}
//Funcion para barajear las tarjetas 
const  barajear = array => {
    const matriz = [...array]

    for (let i = matriz.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1))
        const original = matriz[i]

        matriz[i] = matriz[indiceAleatorio]
        matriz[indiceAleatorio] = original
    }

    return matriz
}

const aleatorio = (array, elementos) => {
    const matriz = [...array]
    const selealeatorio = []

    for (let i = 0; i < elementos; i++) {
        const indiceAleatorio = Math.floor(Math.random() * matriz.length)
        
        selealeatorio.push(matriz[indiceAleatorio])
        matriz.splice(indiceAleatorio, 1)
    }

    return selealeatorio
}

const generarjuegoe = () => {
    const dimensiones = seleccion.juntar.getAttribute('data-dimension')  

    if (dimensiones % 2 !== 0) {
        throw new Error("La dimensión del juntar debe ser un número par.r.")
    }

    const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍']
    const elegir = aleatorio(emojis, (dimensiones * dimensiones) / 2) 
    const elementos =  barajear([...elegir, ...elegir])
    const tarjetas = `
        <div class="juntar" style="grid-template-columns: repeat(${dimensiones}, auto)">
            ${elementos.map(item => `
                <div class="tarjeta">
                    <div class="tarjeta-enfrente"></div>
                    <div class="tarjeta-atras">${item}</div>
                </div>
            `).join('')}
       </div>
    `
    
    const analizador = new DOMParser().parseFromString(tarjetas, 'text/html')

    seleccion.juntar.replaceWith(analizador.querySelector('.juntar'))
}

const empezarGame = () => {
    estado.juegoIniciado = true
    seleccion.empezar.classList.add('disabled')

    estado.bucle = setInterval(() => {
        estado.tiempoTotal++

        seleccion.movimientos.innerText = `${estado.volteosTotales} movimientos`
        seleccion.timer.innerText = `Time: ${estado.tiempoTotal} sec`
    }, 1000)
}

const flipatrastarjetas = () => {
    document.querySelectorAll('.tarjeta:not(.matched)').forEach(tarjeta => {
        tarjeta.classList.remove('flipped')
    })

    estado.tarjetasVolteadas = 0
}

const tarjetasVolteadas = tarjeta => {
    estado.tarjetasVolteadas++
    estado.volteosTotales++

    if (!estado.juegoIniciado) {
        empezarGame()
    }

    if (estado.tarjetasVolteadas <= 2) {
        tarjeta.classList.add('flipped')
    }

    if (estado.tarjetasVolteadas === 2) {
        const tarjetasVolteadas = document.querySelectorAll('.flipped:not(.matched)')

        if (tarjetasVolteadas[0].innerText === tarjetasVolteadas[1].innerText) {
            tarjetasVolteadas[0].classList.add('matched')
            tarjetasVolteadas[1].classList.add('matched')
        }

        setTimeout(() => {
            tarjetasVolteadas()
        }, 1000)
    }
    if (!document.querySelectorAll('.tarjeta:not(.flipped)').length) {
        setTimeout(() => {
            seleccion.juntarContainer.classList.add('flipped')
            seleccion.ganar.innerHTML = `
                <span class="ganar-text">
                    You won!<br />
                    with <span class="highlight">${estado.volteosTotales}</span> movimientos<br />
                    under <span class="highlight">${estado.tiempoTotal}</span> seconds
                </span>
            `

            clearInterval(estado.bucle)
        }, 1000)
    }
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        if (eventTarget.className.includes('tarjeta') && !eventParent.className.includes('flipped')) {
            tarjetasVolteadas(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            empezarGame()
        }
    })
}

generarjuegoe()
attachEventListeners()