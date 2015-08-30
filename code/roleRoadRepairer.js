module.exports = function(creep) {
    
    if(creep.carry.energy == 0) {
        creep.moveTo(Game.spawns.ByAgenT);
        Game.spawns.ByAgenT.transferEnergy(creep);
    }
    else {
            var target = creep.pos.findClosest(FIND_STRUCTURES, { 
                filter: function(object) {
                    if (object.structureType == 'road' && object.hits < 5000) {
                        return true;
                    }
                }
            });
            creep.moveTo(target);
            creep.repair(target);
        //}
        
    }
}