let current_player = "X";
let matrix = "---------";
const playero = document.getElementById("activeo");
const playerx = document.getElementById("activex");
const lineid = document.getElementById("line");
let ws = document.getElementById("winning-screen");
function active_switch(event){
    const Elid=event.target;
    const Helloid=Elid.id;
    let index = parseInt(Helloid[1], 10);
    if(Elid.innerHTML === ""){
        if(current_player==="X"){
            matrix = matrix.substring(0, index) + current_player + matrix.substring(index + 1);
            Elid.innerHTML = "X";
            current_player="O";
            playerx.style.color = "#F2F4F3";
            playero.style.color = "#C1A57B";
        }
        else{
            matrix = matrix.substring(0, index) + current_player + matrix.substring(index + 1);
            Elid.innerHTML = "O";
            current_player="X";
            playero.style.color = "#F2F4F3";
            playerx.style.color = "#A13333";
        }
    }
    check_win();
}
function check_win(){
    if(matrix[0] === matrix[1] &&  matrix[1] === matrix[2] && matrix[0] !== "-"){
        if(matrix[0] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.top = "120px";
        game_won(matrix[0]);
    }
    else if(matrix[3] === matrix[4]  &&  matrix[4]=== matrix[5] && matrix[3] != "-"){
        if(matrix[3] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.display = "block";
        lineid.style.transform = "rotate(0deg)";
        game_won(matrix[3]);
    }
    else if(matrix[6] === matrix[7] &&  matrix[7] === matrix[8] && matrix[6] != "-"){
        if(matrix[6] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.bottom = "120px";
        game_won(matrix[6]);
    }
    else if(matrix[0] === matrix[4] &&  matrix[4] === matrix[8] && matrix[8] != "-"){
        if(matrix[0] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.transform = "rotate(45deg)";
        game_won(matrix[0]);
    }
    else if(matrix[2] === matrix[4] &&  matrix[4] === matrix[6] && matrix[4] != "-"){
        if(matrix[2] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.transform = "rotate(135deg)";
        game_won(matrix[2]);
    }
    else if(matrix[0] === matrix[3] &&  matrix[3] === matrix[6] && matrix[6] != "-"){
        if(matrix[0] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.left = "1px";
        lineid.style.transform = "rotate(90deg)";
        game_won(matrix[0]);
    }
    else if(matrix[1] === matrix[4] &&  matrix[4] === matrix[7] && matrix[7] != "-"){
        if(matrix[1] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.transform = "rotate(90deg)";
        game_won(matrix[1]);
    }
    else if(matrix[2] === matrix[5] &&  matrix[5] === matrix[8] && matrix[8] != "-"){
        if(matrix[2] === "X")
            console.log("X Won");
        else
            console.log("O Won");
        lineid.style.transform = "rotate(90deg)";
        lineid.style.right = "1px";
        game_won(matrix[2]);
    }
    else{
        if(!matrix.includes("-")){
            game_won("draw");
        }
        return;
    }
}
function reset(){
    const cells = document.querySelectorAll('.x-o');
    cells.forEach(cell => {
        cell.innerHTML = '';
    });
    playero.style.color = "#F2F4F3";
    playerx.style.color = "#A13333";
    lineid.style.display = "none";
    ws.style.display = "none";
    matrix = "---------"
}
function game_won(player){
    if(player === "draw"){
        ws.innerHTML = "Its A Draw";
        ws.style.display = "flex";
        console.log("Its a Draw");
    }
    else{
        lineid.style.display = "block";
        ws.innerHTML = player + " Won!";
        ws.style.display = "flex";
        playerx.style.color = "#F2F4F3";
        playero.style.color = "#F2F4F3";
        
    }

}
const buttons = document.querySelectorAll('.x-o');

buttons.forEach(button => {
    button.addEventListener("click", active_switch);
});

const resetbutton = document.getElementById("resetb");
resetbutton.addEventListener("click",reset);