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
    
    
    //get our marks from players - X or O
    const getPlayerMark = (function(){
        const cell = document.querySelectorAll('.cell');
        const playerOneBtn = document.querySelector('#player1');
        const playerTwoBtn = document.querySelector('#player2');
        let choosenBtn;
        playerOneBtn.addEventListener('click',() => choosenBtn = player1.status);
        playerTwoBtn.addEventListener('click', () => choosenBtn = player2.status);
        cell.forEach((cell)=>{
            cell.addEventListener('click',()=>{
                if(choosenBtn == player1.status && cell.textContent == ''){
                    cell.textContent = player1.mark;
                    choosenArray1.push(parseInt(cell.id));

                    compareArrays(choosenArray1);
                }
                else if(choosenBtn == player2.status && cell.textContent == ''){
                    cell.textContent = player2.mark;
                    choosenArray2.push(parseInt(cell.id));
                    
                    compareArrays(choosenArray2);
                }
            })
        })
    })();
    

    //compare arrays from players with possible win combinations
    const compareArrays =(function(getArray){
        const showResult = document.querySelector('.showResult');
        const winArray = {  //possible win combinations
            one: [0,1,2],
            two: [3,4,5],
            three: [6,7,8],
            four: [0,4,8],
            five: [2,4,6],
            six: [0,3,6],
            seven: [1,4,7],
            eight: [2,5,8]
        }   
        
        //start compare arrays, when player check at least 3 marks
        if(getArray.length>2){
            if(winArray.one.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };
            if(winArray.two.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };
            if(winArray.three.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };
            if(winArray.four.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };
            if(winArray.five.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };
            if(winArray.six.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };
            if(winArray.seven.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };                                                                 
            if(winArray.eight.every((a)=>(getArray.includes(a)))){
                return showResult.textContent = "You are Winner!"
            };
        }
    });
    
      
       
})();

 