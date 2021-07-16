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

    const playerMark = (function(){
        const cell = document.querySelectorAll('.cell');
        cell.forEach((cell)=>{
            cell.addEventListener('click',()=>{
                cell.textContent = "X"
            })
        })
    })();   

})();

 