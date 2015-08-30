module.exports = function(creep) {
    if(creep.carry.energy == 0) {
        creep.moveTo(Game.spawns.ByAgenT);
        Game.spawns.ByAgenT.transferEnergy(creep);
    }
    if (creep.carry.energy != 0) {  
        creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
    }
}