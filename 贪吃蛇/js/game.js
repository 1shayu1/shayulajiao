import Food from './food.js'
import Snake from './snake.js'

export default class Game {
    constructor(ele,score){
        this.map = document.querySelector(ele)
        //获取板块
        this.score = document.querySelector(score)
        //获取记分牌
        this.food = new Food(this.map)
        this.snake = new Snake(this.map)
        this.level = 1
        //等级
        this.timer = 0
        this.count = 0
        //吃到多少食物
        this.flag = true
        this.change()
    }
    //开始游戏
    static(){
    this.timer = setInterval(()=>{
        if(this.flag === true){
            this.snake.move()
        }
     
      //吃到食物
      if(this.snake.isEat(this.food)){
          this.updateScore()
          this.snake.creHead()
          this.food.newFood()
      }
      //死亡
      if(this.snake.isDis()){
          if(this.flag === true){
            window.alert('gg')
           this.flag = false
          }
           
          clearInterval(this.timer)
      }
    },150 / this.level)
    }
    stop(){
        clearInterval(this.timer)
    }
    
    restart(){
        window.location.reload()
    }

    change(){
        document.addEventListener('keydown',e=>{
            e = e || window.event
            let code = e.keyCode || which
            switch(code){
                case 37: this.snake.disrection = 'left' ;break
                case 38: this.snake.disrection = 'top' ;break
                case 39: this.snake.disrection = 'right' ;break
                case 40: this.snake.disrection = 'bottom' ;break             
            }
        })
    }
    //吃到食物的记分牌
    updateScore(){
        this.count++
        this.score.value = this.count * 100 + this.level * 10
        if(this.count % 15 ===0){
            this.level++
            this.stop()
            this.static()
        }
    }
}