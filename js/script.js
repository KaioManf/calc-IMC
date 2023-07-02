import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notANumber, ClassIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber (weight) || notANumber(height)

    if (weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)
}

/* Forma alternativa - caso o botão fosse input funcionaria porém não da maneira correta. */
form.oninput = () => AlertError.close()

/* Desafio Aula: (específicando cada campo)
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
*/

function displayResultMessage(result){
    const classImc = ClassIMC(result)
    const message = `Seu IMC é de ${result}! A classificação do seu IMC é: ${classImc}`

    Modal.message.innerText = message
    Modal.open()
}