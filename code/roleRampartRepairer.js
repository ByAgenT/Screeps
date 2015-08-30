module.exports = function(creep) {
    
    if(creep.carry.energy == 0) {
        creep.moveTo(Game.spawns.ByAgenT , { reusePath: 15 });
        Game.spawns.ByAgenT.transferEnergy(creep);
       // creep.moveTo(Game.flags.Ramparts);
      //  creep.moveByPath(Memory.rooms.W15N7.paths.fromRampartsToSpawn);
      //  if(creep.pos == Game.flags.SpawnSouth.pos) {
           // creep.say("refill");
          //  if(Game.spawns.ByAgenT.transferEnergy(creep) == 0 || Game.spawns.ByAgenT.transferEnergy(creep) == -8) {
          //  creep.say("omw");
          //  creep.moveByPath(Memory.rooms.W15N7.paths.fromSpawnToRamparts)
          //  creep.memory.onWay = true;
           // }    
      //  }
    }
    else {
       /* if(creep.pos == Game.flags.Ramparts.pos){
            creep.memory.onWay = false;
        }*/
      //  if(!creep.memory.onWay){
            var target = creep.pos.findClosest(FIND_STRUCTURES, { 
                filter: function(object) {
                    if (object.structureType == 'rampart' && object.hits < 50000) {
                        return true;
                    }
                }
            });
            creep.moveTo(target);
            creep.repair(target);
        //}
        
    }
}