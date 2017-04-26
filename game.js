var bg;
var Game = {
    
    preload: function(){
        game.load.image('background', 'imgs/bg.png');
        game.load.image('car', 'imgs/carro.png');
        game.load.image('greenCar', 'imgs/carroMalo1.png');
        game.load.image('yellowCar', 'imgs/carroMalo.png');
        game.load.image('explotion', 'imgs/explosion.png');
        game.load.image('gas', 'imgs/gas.png');
    },
    
    create: function(){
        bg = game.add.tileSprite(0, 0, 290, 540, 'background');
        
    },
    
    update: function(){
        
    }
    
};