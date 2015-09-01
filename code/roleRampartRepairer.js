module.exports = function(creep) {
    
    if(creep.carry.energy == 0) {
        creep.moveTo(Game.getObjectById(creep.room.memory.storage), { reusePath: 30 });
        Game.getObjectById(creep.room.memory.storage).transferEnergy(creep);
    }
    else {

        var target = creep.pos.findClosest(FIND_STRUCTURES, { 
            filter: function(object) {
                if (object.structureType == 'rampart' && object.hits < 60000) {
                    return true;
                }
            }
        });
        creep.moveTo(target);
        creep.repair(target);
    }
}