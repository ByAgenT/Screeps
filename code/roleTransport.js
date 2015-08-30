module.exports = function (creep) {   //Module for energy harvesting

    if(creep.carry.energy == 0) {
        creep.moveTo(22, 24);
        creep.pickup(Game.creeps.Harvester1.pos.lookFor('energy')[0]);
    }
    else {
        if(Game.spawns.ByAgenT.energy < Game.spawns.ByAgenT.energyCapacity){
           creep.moveTo(Game.spawns.ByAgenT);
           creep.transferEnergy(Game.spawns.ByAgenT) 
        }
        else {
            var extension = creep.pos.findClosest(FIND_MY_STRUCTURES, {
                filter: function(object) {
                    if(object.structureType != "extension") {
                        return false;
                    }         
                    if(object.energy == object.energyCapacity) {
                        return false;
                    }
                    return true;
                }
        });
        creep.moveTo(extension);
        creep.transferEnergy(extension);
        }
    }
}