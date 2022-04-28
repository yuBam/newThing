const config = {
    width:512,
    height:512,
    backgroundcolor: '#333333',
    type: Phaser.AUTO,
    parent: 'game',
    scene:[],
    scale: {
        zoom:2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug:true,
            gravity:{y:0},
        }
    },
    plugins: {
        scene:[
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}
new Phaser.Game(config);