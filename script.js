const gameBoard = (()=>{
    
    //create players
    const createdPlayers = (name,mark,status)=>{
        return {name, mark, status}
    }
    const player1 = createdPlayers('Player_1', 'X', true);
    const player2 = createdPlayers('Player_2', 'O', false);

    //arrays for pushing values from each players
    let choosenArray1 = [];
    let choosenArray2 = [];
    let commonArray = [];
    
    //play game module
    const gamePlay = (function(){
        const cell = document.querySelectorAll('.cell');
        const start = document.querySelector('.startBtn');
        const showResult = document.querySelector('.showResult');
        const restart = document.querySelector('.restartBtn');
        const startPage = document.querySelector('.startPage');
        let choosenBtn;
        
        function playGame(){
            restartGame();
            choosenBtn = player1.status;
            cell.forEach((cell)=>{
                cell.addEventListener('click',()=>{
                    
                    //get display mark from player1
                    if(choosenBtn == player1.status && cell.textContent == ''){
                        cell.textContent = player1.mark;
                        commonArray.push(cell.id);
                        choosenArray1.push(parseInt(cell.id));
                        turnPlayerTwo();
                        
                        //show draw result if commonArray is full
                        if(getDrawResult()){
                            showResult.textContent =  "It's DRAW!"
                        };
                        
                        //show player1 as a winner
                        if(compareArrays(choosenArray1)){
                            showResult.textContent =  "Player 1 is the WINNER!"
                        };
                        
                        //change player1 turn to player2 turn
                        player1.status = false;
                        player2.status = true;
                                                                                    
                    }
    
                    //get display mark from player2
                    else if(choosenBtn == player2.status && cell.textContent == ''){
                        cell.textContent = player2.mark;
                        commonArray.push(parseInt(cell.id));
                        choosenArray2.push(parseInt(cell.id));
                        turnPlayerOne();

                        //show draw result if commonArray is full
                        if(getDrawResult()){
                            showResult.textContent =  "It's DRAW!"
                                                     
                        };
                        
                        //show player2 as a winner
                        if(compareArrays(choosenArray2)){
                            showResult.textContent =  "Player 2 is the WINNER!"
                                                  
                        };
                        
                        //change player2 turn to player1 turn
                        player1.status = true;
                        
                    }
                })
            })
        };

        //start and restart game by clicking buttons
        const gameController = (()=>{
            
            start.addEventListener('click',() =>startPage.style.display = 'none', 
                                                playGame());
                                              
            restart.addEventListener('click',() => restartGame());
                                                   
        })();
        
        //restart game
        function restartGame(){
            choosenArray1 = [];
            choosenArray2 = [];
            commonArray = [];
            cell.forEach((cell)=>cell.textContent = '');
            showResult.textContent = '';
        }
       
        
})();
    
    
    //compare arrays from players with possible win combinations
    const compareArrays =(function(getArray){

        //possible win combinations
        const winArray = {  
            one: [0,1,2],
            two: [3,4,5],
            three: [6,7,8],
            four: [0,4,8],
            five: [2,4,6],
            six: [0,3,6],
            seven: [1,4,7],
            eight: [2,5,8]
        }   
        
        //start compare arrays, when player checked at least 3 marks
        if(getArray.length>2){
            if(winArray.one.every((a)=>(getArray.includes(a)))){
                return true
            };
            if(winArray.two.every((a)=>(getArray.includes(a)))){
                return true
            };
            if(winArray.three.every((a)=>(getArray.includes(a)))){
                return true
            };
            if(winArray.four.every((a)=>(getArray.includes(a)))){
                return true
            };
            if(winArray.five.every((a)=>(getArray.includes(a)))){
                return true
            };
            if(winArray.six.every((a)=>(getArray.includes(a)))){
                return true
            };
            if(winArray.seven.every((a)=>(getArray.includes(a)))){
                return true
            };                                                                 
            if(winArray.eight.every((a)=>(getArray.includes(a)))){
                return true
            };
        }
    });

    //check commonArray length
    const getDrawResult = (function(){
        if(commonArray.length===9){
            return true;
        }
    });
    
    //display that player2(O) need turn now
    function turnPlayerTwo(){
        const playerOne = document.querySelector('#player1');
        const playerTwo = document.querySelector('#player2');
        playerTwo.style.backgroundColor = 'rgb(199,119,185)';
        playerTwo.textContent = "O";
        playerTwo.style.color = 'white';
        playerTwo.style.fontSize = '25px';
        playerTwo.style.fontWeight = 'bold';
        playerOne.style.backgroundColor = 'white';
        playerOne.style.color = 'rgb(203,114,176)';
        playerOne.style.fontSize = '25px';
        playerOne.textContent = "X";
        playerOne.style.fontWeight = 'bold';
    }
    
    //display that player1(X) need turn now
    function turnPlayerOne(){
        const playerOne = document.querySelector('#player1');
        const playerTwo = document.querySelector('#player2');
        playerOne.style.backgroundColor = 'rgb(199,119,185)';
        playerOne.textContent = "X";
        playerOne.style.color = 'white';
        playerOne.style.fontSize = '25px';
        playerTwo.style.backgroundColor = 'white';
        playerTwo.style.color = 'rgb(203,114,176)';
        playerTwo.style.fontSize = '25px';
        playerTwo.textContent = "O";
        playerTwo.style.fontWeight = 'bold';
    }

})();

 