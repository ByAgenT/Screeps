module.exports = function(creep) { //Module for energy harvesting

    if (creep.carry.energy == 0) {
        if (Memory.fillSpawnerFromStorage) {

            if (Game.creeps.Harvester1) {
                creep.moveTo(22, 24);
                creep.pickup(creep.room.getPositionAt(21, 23).lookFor('energy')[0]);
            } else {
                creep.moveTo(24, 24);
                var storage = Game.getObjectById(creep.room.memory.storage);
                storage.transferEnergy(creep);
            }
        } else {
            creep.moveTo(22, 24);
            creep.pickup(creep.room.getPositionAt(21, 23).lookFor('energy')[0]);
        }


    } else {
        if (Game.spawns.ByAgenT.energy < Game.spawns.ByAgenT.energyCapacity) {
            creep.moveTo(Game.spawns.ByAgenT);
            creep.transferEnergy(Game.spawns.ByAgenT)
        } else {
            var extension = creep.pos.findClosest(FIND_MY_STRUCTURES, {
                filter: function(object) {
                    if (object.structureType != "extension") {
                        return false;
                    }
                    if (object.energy == object.energyCapacity) {
                        return false;
                    }
                    return true;
                }
            });
            if (extension) {
                creep.moveTo(extension);
                creep.transferEnergy(extension);
            } else {
                var storage = Game.getObjectById(creep.room.memory.storage);
                creep.moveTo(storage);
                creep.transferEnergy(storage);
            }

        }
    }
}