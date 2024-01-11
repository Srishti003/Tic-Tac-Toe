let boxes= document.querySelectorAll(".box")
let reset_btn = document.querySelector("#reset")
let new_game_btn=document.querySelector("#new_game")
let msgContainer=document.querySelector(".msg_container")
let msg = document.querySelector("#msg")
let turn_o=true;
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],
                   [0,3,6],[1,4,7],[2,5,8],
                   [0,4,8],[2,4,6]
];
 
const disableBoxes=()=>{
    for(let i of boxes){
        i.disabled = true;
    }

  }

const enableBoxes=()=>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText = " ";
    }

  }                
                   
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       console.log("box clicked");
       if(turn_o==true){box.innerText="O";turn_o=false;}
       else{box.innerText="X";turn_o=true;}
       box.disabled=true;
       checkWinner();
    })
  })  

const resetGame=()=>
{
    turn_o=true;
    enableBoxes(); 
    msgContainer.classList.add("hide");
 }
  
  
  const showWinner=(Winner)=>{
   
    msg.innerText=`Congratulations, Winner is ${Winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();

  }
  const checkWinner=()=>{
    for(i of winPatterns){
        let one   = boxes[i[0]].innerText
        let two   = boxes[i[1]].innerText
        let three = boxes[i[2]].innerText
        if(one!==""&&two!==""&&three!==""){
           if((one===two)&&(two===three)){
              showWinner(one);
            }
            
        }
    }
  }
  new_game_btn.addEventListener("click",resetGame);
  reset_btn.addEventListener("click",resetGame);
       