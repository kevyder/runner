var bg;
var car;
var anticar;
var gases;
var controllers;
var timer;
var gasTimer;

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
        
        anticar = game.add.group();
        game.physics.arcade.enable(anticar);
        anticar.enableBody = true;
        anticar.createMultiple(20, 'greenCar');
        anticar.setAll('anchor.x', 0.5);
        anticar.setAll('anchor.y', 0.5);
        anticar.setAll('checkWorldBounds', true);
        anticar.setAll('outOfBoundsKill', true);
        
        gases = game.add.group();
        game.physics.arcade.enable(gases);
        gases.enableBody = true;
        gases.createMultiple(20, 'gas');
        gases.setAll('anchor.x', 0.5);
        gases.setAll('anchor.y', 0.5);
        gases.setAll('checkWorldBounds', true);
        gases.setAll('outOfBoundsKill', true);
        
        timer = game.time.events.loop(1500, this.createGreenCar, this);
        gasTimer = game.time.events.loop(3000, this.createGas, this);
        controllers = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        bg.tilePosition.y += 3;
        if(controllers.right.isDown && car.position.x < 245){ car.position.x += 5; }
        else if(controllers.left.isDown && car.position.x > 45){ car.position.x -= 5; }
    },
    
    createGreenCar: function(){
        var pos = Math.floor(Math.random()*3) + 1;
        var enemy =  anticar.getFirstDead();
        enemy.physicsBodyType = Phaser.Physics.ARCADE;
        enemy.reset(pos*73, 0);
        enemy.body.velocity.y = 200;
    },
    
    createGas: function(){
        var pos = Math.floor(Math.random()*3) + 1;
        var gas =  gases.getFirstDead();
        gas.physicsBodyType = Phaser.Physics.ARCADE;
        gas.reset(pos*73, 0);
        gas.body.velocity.y = 200;
    }
};