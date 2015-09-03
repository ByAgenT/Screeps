module.exports = function() { //Module for auto-respawning died creeps

    var SYSTEMS_OK = Game.creeps.Harvester1 && Game.creeps.Transporter1;

    // Harvesters
    if (!Game.creeps.Harvester1) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], "Harvester1");
    }


    // Transporters
    if (!Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], "Transporter1")
    }


    // Builders
    /*if(!Game.creeps.Builder1 && SYSTEMS_OK) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], "Builder1");
    }*/

    // Repairers
    /*if(!Game.creeps.WallRepairer && SYSTEMS_OK) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, CARRY, CARRY, MOVE], "WallRepairer");
    }*/
    if (!Game.creeps.RampartRepairer && SYSTEMS_OK) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], "RampartRepairer")
    }
    if (!Game.creeps.RoadRepairer && SYSTEMS_OK) {
        Game.spawns.ByAgenT.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], "RoadRepairer")
    }

    // Guards
    if (!Game.creeps.Guard1 && SYSTEMS_OK) {
        Game.spawns.ByAgenT.createCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
                MOVE, MOVE, MOVE,
                TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH
            ],
            "Guard1");
    }
    if (!Game.creeps.Guard2 && SYSTEMS_OK) {
        Game.spawns.ByAgenT.createCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
                MOVE, MOVE, MOVE,
                TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH
            ],
            "Guard2");
    }

    // Upgraders
    if (!Game.creeps.ControllerManager1 && SYSTEMS_OK) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], "ControllerManager1");
    }
}