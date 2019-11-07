
//logica// 
var display = document.getElementById('display')
var answer= document.getElementById('answer')


function generateAnswer() {
    
    display.valueL=''
    var response;
    let number = Math.floor(Math.random() * 5)
    switch (number) {
        case 0:
            response='yes'
            break
        case 1:
            response='no'
            break
        case 2:
            response='maybe, try your luck'
            break
        case 3:
            response='can/t see clearly the future'
            break
        case 4:
            response='wish you the best of lucks trying'
            break
        default:
            response='something went terribly wrong'
            break
    }
    
    display.value=response
}

answer.addEventListener('click',generateAnswer)



 