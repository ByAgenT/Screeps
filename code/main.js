var harvest, build, guard, respawn, controllerUpgrade, wallRepair, transporting;

harvest = require('roleHarvester');
build = require('roleBuilder');
guard = require('roleGuard');
controllerUpgrade = require('roleUpgrader');
wallRepair = require('roleWallRepairer');
rampartRepair = require('roleRampartRepairer');
transporting = require('roleTransport');
roadRepair = require('roleRoadRepairer');

respawn = require('respawner');

respawn();

for(var name in Game.creeps) {

    var creep = Game.creeps[name];

    //creep.memory.lastAlive = Game.time;
    
    if(creep.memory.role == 'harvester') {
        harvest(creep);
    }

    else if(creep.memory.role == 'builder') {
        build(creep);
    }
    
    else if(creep.memory.role == 'controller') {
        controllerUpgrade(creep);
    }
    
    else if(creep.memory.role == 'guard') {
        guard(creep);
    }
    
    else if(creep.memory.role == 'wall_repairer') {
        wallRepair(creep);
    }

    else if(creep.memory.role == 'rampart_repairer') {
        rampartRepair(creep);
    }

    else if(creep.memory.role == 'road_repairer') {
        roadRepair(creep);
    }
    else if(creep.memory.role == 'transport') {
        transporting(creep);
    }

}