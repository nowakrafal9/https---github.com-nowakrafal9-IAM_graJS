const generateCharacters = {
    generateHero() {
        return new Person({
            src: "./assets/characters/adventurer.png",
            objectType: "Player",
            x: 0, y: 111,
            sizeX: 50, sizeY: 37,
        })
    },

    generateEnemy() {
        let randomEnemy = Math.floor(Math.random() * 2);

        if (randomEnemy == 0) {
            return {
                enemy: new EnemySlime({
                    src: "./assets/characters/slime.png",
                    objectType: "Slime",
                    x: 360, y: 123,
                    sizeX: 32, sizeY: 25,
                })
            }
        }
        if (randomEnemy == 1) {
            return {
                enemy: new EnemySlime({
                    src: "./assets/characters/slimeBoss.png",
                    objectType: "SlimeBoss",
                    x: 360, y: 123,
                    sizeX: 32, sizeY: 25,
                })
            }
        }
    }
}

const generateEvents = {
    generateBattle(who) {
        let events = [
            { who: "enemy", type: "long_walk", direction: "left" },
            { type: "textMessage", text: "A wild enemy appears!!!" },
            { who: "enemy", type: "long_walk", direction: "left" },
            { who: "enemy", type: "long_walk", direction: "left" },
            { type: "battle", enemyId: who.objectType },
            { type: "modifyPlayerFlag", flag: "START_BATTLE", flagValue: false },
        ];

        return events;
    }
}