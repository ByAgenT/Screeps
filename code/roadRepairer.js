module.exports = function(creep) {
    
    if(creep.carry.energy == 0) {
		creep.moveTo(Game.spawns.ByAgenT);
	   	Game.spawns.ByAgenT.transferEnergy(creep);
	   	
	}
	else {
		var targets = creep.room.find(FIND_STRUCTURES, {filter: { structureType: 'road' }})
		if(targets.length) {
		    for(var i = 0; i < targets.length; i++) {
		        if(targets[i].hits < 10000) {
		            creep.moveTo(targets[i]);
			        creep.repair(targets[i]);    
		        }
		    }
		}
	}
}