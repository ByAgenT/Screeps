harvest = require('roleHarvester');

module.exports = function(creep) {
    
    if(creep.carry.energy == 0) {
        creep.moveTo(22, 23);
        creep.pickup(creep.room.getPositionAt(21,23).lookFor('energy')[0]); 
        
    }
    else {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            creep.moveTo(targets[0]);
            creep.build(targets[0]);
        }
    } 
}