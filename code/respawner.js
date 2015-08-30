module.exports = function() {  //Module for auto-respawning died creeps

    // Workers
    /*if(!Game.creeps.Worker1) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE], "Worker1"); //550
    }
    if(!Game.creeps.Worker2) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE], "Worker2"); //550
    }
    if(!Game.creeps.Worker3) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE], "Worker3");
    }*/
    if(!Game.creeps.Harvester1) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], "Harvester1" , { role: 'harvester' });
    }


    // Transporting
    if(!Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], "Transporter1", { role: 'transport' })
    }

    
    // Builders
    if(!Game.creeps.Builder1 && Game.creeps.Harvester1 && Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, CARRY, MOVE], "Builder1");
    }
    /*if(!Game.creeps.Builder2 && Game.creeps.Worker2) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, CARRY, MOVE], "Builder2");
    }*/

    // Repairers
    if(!Game.creeps.WallRepairer && Game.creeps.Harvester1 && Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, CARRY, CARRY, MOVE], "WallRepairer");
    }
    if(!Game.creeps.RampartRepairer && Game.creeps.Harvester1 && Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], "RampartRepairer")
    }
    if(!Game.creeps.RoadRepairer && Game.creeps.Harvester1 && Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], "RoadRepairer")
    }
    
    // Guards
    if(!Game.creeps.Guard1 && Game.creeps.Harvester1 && Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH], "Guard1");
    }
    if(!Game.creeps.Guard2 && Game.creeps.Harvester1 && Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH], "Guard2");
    }
    
    // Controller handlers
    if(!Game.creeps.ControllerManager1 && Game.creeps.Harvester1 && Game.creeps.Transporter1) {
        Game.spawns.ByAgenT.createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], "ControllerManager1");
    }
    /*if(!Game.creeps.ControllerManager2 && Game.creeps.Worker2) {
        Game.spawns.ByAgenT.createCreep([WORK, CARRY, CARRY, MOVE], "ControllerManager2");
    }*/
}