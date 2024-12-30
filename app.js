console.log("hii guys i am amaking tic tac toe");
let btns=document.querySelectorAll(".box");
let winner=document.querySelector(".p");
let turnO=true;
let click=0;
let reset=document.querySelector(".reset");
const Winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("i am clicked");
            if(turnO){
                btn.innerText="O";
                turnO=false;
            }
            else{
                btn.innerText="X";
                turnO=true;
            }
        click++;
        btn.disabled=true;
        checkWinner();
    });
});

let disablebox=()=>{
    for(let box of btns){
        box.disabled=true;
    }
}
let enablebox=()=>{
    for(let box of btns){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turnO=true;
    enablebox();
    

}
const checkWinner=()=>{
    if(click==9){
        winner.innerText="game is withdrawn";
    }
    for(let pattern of Winpatterns){
        let posval1=btns[pattern[0]].innerText;
        let posval2=btns[pattern[1]].innerText;
        let posval3=btns[pattern[2]].innerText;
        if(posval1 !="" && posval3!="" && posval2 !=""){
            if(posval1==posval2 && posval2==posval3){
                console.log("winner");
                winner.innerText=`winner is ${posval1}`;
                disablebox();

            }
        }
        }
    }
reset.addEventListener("click",resetGame);