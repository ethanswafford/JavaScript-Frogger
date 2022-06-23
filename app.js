const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
console.log(squares)

let currentIndex = 76

function moveFrog() {

    switch (e.key) {
        case 'ArrowLeft':
            console.log('move left')

    }

    squares[currentIndex].classList.add('frog')

}

document.addEventListener('keyup', moveFrog)