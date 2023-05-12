const input = document.querySelector('#inputNums');
const button = document.querySelector('button');

let userInput = function() {
    for(let i = 1; i <= input.value; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if(i % 3 === 0) {
            console.log('fizz')
        } else if(i % 5 === 0){
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
    input.value = '';
}

button.addEventListener('click', function(e) {
    e.preventDefault()
    userInput()
})


