let choice = document.getElementById("button");
let pile = document.getElementById("pile");
let face = document.getElementById("face");
let  i = 0;
document.getElementById("score").innerHTML = i;
button.addEventListener("click",game);

function game()
{
let win = Math.round(Math.random()*1);
if(win==1)
{
    i++;
    alert("Gagné ! ");
    document.getElementById("score").innerHTML = i;
    
}
else
{
    i--;
    alert("Perdu ! ");
    document.getElementById("score").innerHTML = i;
}
}
