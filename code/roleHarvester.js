module.exports = function (creep) {   //Module for energy harvesting

    if(creep.harvest(Game.getObjectById(creep.room.memory.source)) == -9) {
        creep.moveTo(21,23);    
    }
}