
//logica// 
var display = document.getElementById('display')
var answer= document.getElementById('answer')
var ball= document.getElementById('ball')
var shadow= document.getElementById('shadow')
var body=document.getElementById('body')
var animationRuning = false

function generateAnswer() {
    if(animationRuning) return
    display.value='Predicting...'
    var response;
    var number = Math.floor(Math.random() * 21)
    ball.classList.add('rotateball');
    shadow.classList.add('jump');
    body.classList.add('flickering');

    switch (number) {
        case 0:
            response='It is certain.'
            break
        case 1:
            response='It is decidedly so.'
            break
        case 2:
            response='Without a doubt.'
            break
        case 3:
            response='Most likely.'
            break
        case 4:
            response='Yes - definitely.'
            break
        case 5:
            response=' You may rely on it.'
            break
        case 6:
            response='As I see it, yes.'
            break
        case 7:
            response='Outlook good.'
            break
        case 8:
            response='Yes.'
            break
        case 9:
            response='Outlook not so good.'
            break
        case 10:
            response=' Signs point to yes.'
            break
        case 11:
            response='Reply hazy, try again'
            break
        case 12:
            response=' My sources say no.'
            break
        case 13:
            response='Ask again later.'
            break
        case 14:
            response='Better not tell you now.'
            break
        case 15:
            response='Very doubtful.'
            break
        case 16:
            response='Yes - definitely'
            break
        case 17:
            response=' Cannot predict now.'
            break
        case 18:
            response='Concentrate and ask again.'
            break
        case 19:
            response='My reply is no'
            break
        case 20:
            response=' Don/t count on it.'
            break
        default:
            response='something went terribly wrong'
            break
    }
    animationRuning = true

    setTimeout(function() {
        ball.classList.remove('rotateball');
        shadow.classList.remove('jump');
        body.classList.remove('flickering');
        display.value=response
        animationRuning = false
    }, 2000)
    
}


answer.addEventListener('click',generateAnswer)



 