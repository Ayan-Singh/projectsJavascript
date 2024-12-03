let rock = document.querySelector('.js-rock');
let paper = document.querySelector('.js-paper');
let scissor=document.querySelector('.js-scissor');



rock.addEventListener('click',()=> playGame('Rock'));
paper.addEventListener('click',()=> playGame('Paper'));
scissor.addEventListener('click',()=> playGame('Scissor'));

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
    }else if(move==='Paper'){
        if(computerMove ==='Rock'){
            result = 'Win';
        }else if(computerMove ==='Paper'){
            result='Tie' ; 
        }else{
            result='Lose'; 
        }
    }else{
        if(computerMove ==='Rock'){
            result = 'Lose';
        }else if(computerMove ==='Paper'){
            result='Win' ; 
        }else{
            result='Tie'; 
        }
    }
    alert(`Computer picked ${computerMove} and You picked ${move} hence you ${result}`);
    
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

