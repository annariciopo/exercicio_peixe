var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png')

    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png')

    this.load.image('alga1', 'assets/alga.png')

    this.load.image('alga2', 'assets/alga.png')
}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    peixinho = this.add.image(400, 300, 'peixe')
    peixinho.setFlip(true, false);

    this.add.image(150, 500, 'alga1').setScale(0.5);

    this.add.image(650, 500, 'alga2').setScale(0.5);
}

function update() { 

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}