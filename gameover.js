var GameOver = {
    
    preload: function(){
        //game.load.image('background', 'imgs/bg.png');
        //game.load.image('btn', 'imgs/button.png');
    },
    
    create: function(){
        game.stage.backgroundColor = "#990000"
    },
    
    startGame: function(){
         this.state.start('gameStart');
    }
    
};