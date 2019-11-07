
//logica// 
var display = document.getElementById('display')
var answer= document.getElementById('answer')
var ball= document.getElementById('ball')
var shadow= document.getElementById('shadow')
var animationRuning = false

function generateAnswer() {
    if(animationRuning) return
    
    display.value=''
    var response;
    var number = Math.floor(Math.random() * 5)
    ball.classList.add('rotateball');
    shadow.classList.add('jump');

    switch (number) {
        case 0:
            response='Yes'
            break
        case 1:
            response='My reply is no'
            break
        case 2:
            response='It is decidedly so'
            break
        case 3:
            response='Without a doubt'
            break
        case 4:
            response='Yes - definitely'
            break
        case 5:
            response='wish you the best of lucks trying'
            break
        default:
            response='something went terribly wrong'
            break
    }
    animationRuning = true

    setTimeout(function() {
        ball.classList.remove('rotateball');
        shadow.classList.remove('jump');
        display.value=response
        animationRuning = false
    }, 2000)
    
}


answer.addEventListener('click',generateAnswer)



 