import { isValid } from './lib.js'

document.getElementById('input').addEventListener('input', (e) => {
    console.log(e.target.parentNode)
    const value = e.target.value 
    if(document.getElementById('result')) document.getElementById('result').remove()
    if(value) {
        const span = document.createElement("span");
        span.id = 'result'
        span.classList.add('result')
        const result = isValid(value)
        if(result) {
            span.classList.add('success')
            span.innerHTML = 'Your input is parentheses'
        } else {
            span.classList.add('fail')
            span.innerHTML = 'Your input not parentheses'
        }
        e.target.parentNode.appendChild(span)
    }
})