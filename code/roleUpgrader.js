module.exports = function(creep) {
    if (creep.carry.energy == 0) {
        if (creep.moveByPath(creep.room.memory.paths.fromControllerToSpawn) != 0 && creep.moveByPath(creep.room.memory.paths.fromControllerToSpawn) != -11) {
            creep.say("moveTo");
            creep.moveTo(Game.spawns.ByAgenT);
        }
        Game.spawns.ByAgenT.transferEnergy(creep);
    }
    if (creep.carry.energy != 0) {
        if (creep.moveByPath(creep.room.memory.paths.fromSpawnToController) != 0 && creep.moveByPath(creep.room.memory.paths.fromSpawnToController) != -11) {
            if (creep.upgradeController(creep.room.controller) != 0) {
                creep.say("moveTo");
                creep.moveTo(creep.room.controller);
            }
        }

    }
}