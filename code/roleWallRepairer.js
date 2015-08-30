module.exports = function(creep) {
    
    if(creep.carry.energy == 0) {
        creep.moveTo(Game.spawns.ByAgenT, { reusePath: 15 });
        Game.spawns.ByAgenT.transferEnergy(creep);
        
    }
    else {
        var target = creep.pos.findClosest(FIND_STRUCTURES, {filter: function(object) {
            if (object.structureType == 'constructedWall' && object.hits < 100000) {
                return true;
            }
        }
        });
        creep.moveTo(target, { reusePath: 15 });
        creep.repair(target);
    }
}