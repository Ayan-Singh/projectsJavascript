let rock = document.querySelector('.js-rock');
let paper = document.querySelector('.js-paper');
let scissor=document.querySelector('.js-scissor');



rock.addEventListener('click',()=> playGame('Rock'))

function playGame(move){
    const computerMove = pickComputerMove()
    let result='';
    if(move ==='Rock'){
        if(computerMove ==='Rock'){
            result = 'Tie';
        }else if(computerMove ==='Paper'){
            result='Lose' ; 
        }else{
            result='Win'; 
        }
    }
    alert(result);
    
}

function pickComputerMove(){
    let computerMove =''
    let randomNumber = Math.random();
    if(randomNumber >=0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }else if(randomNumber >=1/3 && randomNumber < 2/3){
        computerMove= 'Paper';
    }else{
        computerMove = 'Scissor';
    }
    return computerMove ; 
}

