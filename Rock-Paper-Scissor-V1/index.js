let rock = document.querySelector('.js-rock');
let paper = document.querySelector('.js-paper');
let scissor=document.querySelector('.js-scissor');
let resultContainer=document.querySelector('.js-result-container');

rock.addEventListener('click',()=> playGame('Rock'));
paper.addEventListener('click',()=> playGame('Paper'));
scissor.addEventListener('click',()=> playGame('Scissor'));

let score={
    wins:0,
    lose:0,
    tie:0
}


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
    if(result==='Win'){
        score.wins+=1
    }else if(result==='Lose'){
        score.lose+=1;
    }else{
        score.tie+=1
    }


    let displayScore=(`Computer picked ${computerMove} and You picked ${move} hence you ${result}
        Wins:${score.wins} , Lose:${score.lose} , Tie:${score.tie}
        `);
    resultContainer.innerHTML=displayScore;
    
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

