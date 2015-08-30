module.exports = function(creep) {  //Module for guarding
    var targets = creep.room.find(FIND_HOSTILE_CREEPS);
    if(targets.length) {
        creep.moveTo(targets[0]);
        creep.attack(targets[0]);
    }
    else {
        creep.moveTo(creep.memory.place.x, creep.memory.place.y);
    }
}