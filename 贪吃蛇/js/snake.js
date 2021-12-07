export default class Snake{
    constructor(map){
       this.map = map
       this.snake = []
       //方向
       this.disrection = 'right'
       this.creSnake()
    }

    //计算位置
    pos(){
        let head = this.snake[0]
        //只负责计算位置
        if(!head) return{left:0,top:0}
        let obj = {left: head.offsetLeft,top:head.offsetTop}
        switch(this.disrection){
            case 'top':obj.top -=20;break
            case 'left':obj.left -=20;break
            case 'right':obj.left +=20;break
            case 'bottom':obj.top +=20;break
        }
      return obj
    }
     //创建头部
    creHead(){
        let pos = this.pos()
        let head = this.snake[0]
        if(head) head.className = 'body'
        let div = document.createElement('div')
        div.className = 'head'
        this.snake.unshift(div)
        div.style.left = pos.left + 'px'
        div.style.top = pos.top +'px'
        this.map.appendChild(div)
    }
    //默认多少节
        creSnake(){
        for(let i = 0;i<3;i++){
            this.creHead()
        }
    }

    
    move(){
        //pop 删除数组最后一个
        let body = this.snake.pop()
        body.remove()
        this.creHead()
    }

    //死亡机制
    isDis(){
        let head = this.snake[0]
        let x = head.offsetLeft
        let y =head.offsetTop
        if(x<0 || y<0 || x >= this.map.clientWidth || y >= this.map.clientHeight){
            return true
        }else{
            let flag = false
            let tmp = this.snake.slice(1)
            tmp.forEach(item=>{
                if(x===item.offsetLeft && y===item.offsetTop){
                      flag = true
                }
            })
            return flag
        }
    }


    //吃到食物
    isEat(food){
        let x = this.snake[0].offsetLeft
        let y = this.snake[0].offsetTop
        if(x === food.x && y === food.y){
            return true
        }else{
            return false
        }
    }





}