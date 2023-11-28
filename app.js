let firstUser = document.getElementById("firstUser")
let secUser = document.getElementById("secUser")
let asker = document.getElementById("asker")
let turn = 0
let btn = document.getElementById('btn')
let game = document.getElementById('game')
let td = document.getElementsByTagName("td")
// console.log(td[0]);
const startGame = ()=>{
    if(firstUser.value==""&&secUser.value==""){
        alert("choose x or 0")
        
    }
    else if(firstUser.value=="x"&&secUser.value=="0"||secUser.value=="x"&&firstUser.value=="0"){
        // alert("got correct value")
        asker.style.display="none"
        game.style.display="block"
    }
    else{
        alert("choose x or 0")
    }
}
function ticTac(t){
//  console.log(t.innerText);
    if(turn==0&&t.innerText==""){
        if(checkGame()){}else{t.innerText=firstUser.value
        t.style.backgroundColor="red"
        checkGame()
        turn=1}

    }
    else if(turn==1&&t.innerText==""){
        if(checkGame()){}
        else{
        t.innerText=secUser.value
        t.style.backgroundColor="green"
        checkGame()
        turn=0}
    }
}

function checkGame(){
if(td[0].innerText==firstUser.value&&td[1].innerText==firstUser.value&&td[2].innerText==firstUser.value||
    td[3].innerText==firstUser.value&&td[4].innerText==firstUser.value&&td[5].innerText==firstUser.value||
    td[6].innerText==firstUser.value&&td[7].innerText==firstUser.value&&td[8].innerText==firstUser.value||
    
    td[0].innerText==firstUser.value&&td[3].innerText==firstUser.value&&td[6].innerText==firstUser.value||
    td[1].innerText==firstUser.value&&td[4].innerText==firstUser.value&&td[7].innerText==firstUser.value||
    td[2].innerText==firstUser.value&&td[5].innerText==firstUser.value&&td[8].innerText==firstUser.value||
    
    td[0].innerText==firstUser.value&&td[4].innerText==firstUser.value&&td[8].innerText==firstUser.value||
    td[6].innerText==firstUser.value&&td[4].innerText==firstUser.value&&td[2].innerText==firstUser.value
    ){
    alert("player one won")
    highlightWinningLine(firstUser.value);
    setTimeout(() => resetBoard(), 2000);
    return true
    // document.write("Player one won")
}
else if(
    td[0].innerText==secUser.value&&td[1].innerText==secUser.value&&td[2].innerText==secUser.value||
    td[3].innerText==secUser.value&&td[4].innerText==secUser.value&&td[5].innerText==secUser.value||
    td[6].innerText==secUser.value&&td[7].innerText==secUser.value&&td[8].innerText==secUser.value||
    
    td[0].innerText==secUser.value&&td[3].innerText==secUser.value&&td[6].innerText==secUser.value||
    td[1].innerText==secUser.value&&td[4].innerText==secUser.value&&td[7].innerText==secUser.value||
    td[2].innerText==secUser.value&&td[5].innerText==secUser.value&&td[8].innerText==secUser.value||
    
    td[0].innerText==secUser.value&&td[4].innerText==secUser.value&&td[8].innerText==secUser.value||
    td[6].innerText==secUser.value&&td[4].innerText==secUser.value&&td[2].innerText==secUser.value
){
    alert("second player won")
    highlightWinningLine(secUser.value);
    setTimeout(() => resetBoard(), 2000);
    return true
}

}
function highlightWinningLine(playerValue) {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
  
    const intervalId = setInterval(() => {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (td[a].innerText === playerValue && td[b].innerText === playerValue && td[c].innerText === playerValue) {
          toggleBackground(td[a]);
          toggleBackground(td[b]);
          toggleBackground(td[c]);
        }
      }
    }, 500); // Adjust the interval (in milliseconds)
  
    setTimeout(() => clearInterval(intervalId), 2000); // Adjust the total duration (in milliseconds)
  }
  
  function toggleBackground(element) {
    element.style.backgroundColor = (element.style.backgroundColor === "blue") ? "" : "blue";
  }
  
  function resetBoard() {
    for (const cell of td) {
      cell.style.backgroundColor = "";
    }
    btn.style.display="block"
  }
btn.addEventListener('click',()=>{
    location.reload()
})