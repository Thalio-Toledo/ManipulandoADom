const imgRobos = [
  'img/robos/Amarelo.png',
  'img/robos/Azul.png',
  'img/robos/Branco.png',
  'img/robos/Preto.png',
  'img/robos/Rosa.png',
  'img/robos/Vermelho.png'
]
const robo = document.querySelector('.robo')

var num = 0
function next() {
  console.log('ola')
  num++
  if (num >= imgRobos.length) {
    num = 0
  }
  robo.src = imgRobos[num]
}

function prev() {
  num--
  if (num < 0) {
    num = imgRobos.length - 1
  }
  robo.src = imgRobos[num]
}

let botNext = document.querySelector('.next')
botNext.addEventListener('click', next)

let botPrev = document.querySelector('.prev')
botPrev.addEventListener('click', prev)

const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
}

controle.forEach(elemento => {
  elemento.addEventListener('click', e => {
    manipulaDados(e.target.dataset.controle, e.target.parentNode)
    atualizaEstatistica(e.target.dataset.peca)
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]')

  if (operacao === '-') {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatistica(peca) {
  estatisticas.forEach(elemento => {
    elemento.textContent =
      parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    console.log(pecas[peca][elemento.dataset.estatistica])
  })
}
