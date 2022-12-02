const Game = {
    screenWidth: 800,
    screeenHeight: 300,
    dinoX: 0,
    dinoY: 0,
    hasObstacle: 0,
    obstacleX: 500,
    obstacleY: 0,
    isJumping: false,
    jumpHeight: 60,
}
const gameEl = document.querySelector('.game')
const obstacleEl = document.querySelector('.obstacle')
const dinoEl = document.querySelector('.dino')

gameEl.style.cssText = `width:${Game.screenWidth}px ; height : ${Game.screeenHeight}px`


// Create obstacle
setInterval(()=>{
    console.log(Game.obstacleX);
    if (Game.obstacleX > - 300){
        Game.obstacleX -=10 
       
    }else{
        Game.obstacleX =  300 +  Math.floor(Math.random() * 1000 )
		  
    }
	 updatePosition('obstacle')
	 checkStatus()
},50)


function checkStatus (){
	// if (dinoX == )
}

function updatePosition(object) {
    if (object == 'obstacle') {
        let color = 'background-color:#fff ;';
        if (Game.obstacleX > 0) {
            obstacleEl.style.cssText = `left:${Game.obstacleX}px ; bottom: ${Game.obstacleY}px ; `
        } else {
            obstacleEl.style.cssText = `left:${Game.obstacleX}px ; bottom: ${Game.obstacleY}px ; ${color}`
        }

    } else if (object == 'dino') {
        dinoEl.style.cssText = `left:${Game.dinoX}px ; bottom: ${Game.dinoY}px`
		  console.log('updated pos')
    }
}


document.body.addEventListener('keydown', (e) => {

    if (Game.isJumping == false && e.key == ' ') {
        Game.isJumping = true
        jump()
    }
})

function jump() {
    let currentJumpHeight = 0
    let direction = 'up'
    const jumpTimer = setInterval(() => {
        if (direction == 'up') {
            if (currentJumpHeight < Game.jumpHeight) {
                currentJumpHeight += 6
                Game.dinoY += 6
                updatePosition('dino')
            } else {
                direction = 'down'
            }
        } else if (direction == 'down') {
					console.log('wee')
            if (currentJumpHeight > 0) {
                currentJumpHeight -= 6
                Game.dinoY -= 6
                updatePosition('dino')
            } else {
					Game.isJumping = false
                clearInterval(jumpTimer)
            }
        }

    }, 50)
}