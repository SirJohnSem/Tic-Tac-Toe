const gameBoard = (()=>{
    
    //create players
    const createdPlayers = (name,mark,status)=>{
        return {name, mark, status}
    }
    const player1 = createdPlayers('Player_1', 'X', true);
    const player2 = createdPlayers('Player_2', 'O', false);

    //possible win combinations
    let winArray = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];
    
    //empty arrays for pushing values from players
    let choosenArray1 = [];
    let choosenArray2 = [];
    
    //get our marks from players - X or O
    const getPlayerMark = (function(){
        const cell = document.querySelectorAll('.cell');
        const player1 = document.querySelector('#player1');
        const player2 = document.querySelector('#player2');
        let choosenBtn;
        player1.addEventListener('click',() => choosenBtn = 'player1');
        player2.addEventListener('click', () => choosenBtn = 'player2');
        cell.forEach((cell)=>{
            cell.addEventListener('click',()=>{
                if(choosenBtn == 'player1'){
                    cell.textContent = 'X';
                    choosenArray1.push(cell.id);
                    console.log(choosenArray1);
                }
                else if(choosenBtn == 'player2'){
                    cell.textContent = 'O';
                    choosenArray2.push(cell.id);
                    console.log(choosenArray2);
                }
                                    
            })
        })
    })();
    
       
})();

 