import Game from "./game.js";
let g = new Game('.map','.score')
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let restart = document.querySelector('.restart')
let flag = true
start.addEventListener('click',()=>{
    if(flag === true){
        g.static()
        flag = false
        console.log(flag);
    }    
    

})
stop.addEventListener('click',()=>{
    if(flag === false){
        g.stop()
        flag = true
        console.log(flag);
    }
    
})
restart.addEventListener('click',()=>g.restart())