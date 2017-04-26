var bg;
var car;
var controllers;

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
        car = game.add.sprite(game.width/2, 490, 'car');
        car.anchor.setTo(0.5);
        controllers = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        bg.tilePosition.y += 3;
        if(controllers.right.isDown && car.position.x < 245){ car.position.x += 5; }
        else if(controllers.left.isDown && car.position.x > 45){ car.position.x -= 5; }
    }
    
};