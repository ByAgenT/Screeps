cacheManager = {
    cacheSources: function(currentRoom) {
        currentRoom.memory.sources = currentRoom.find(FIND_SOURCES);
    },

    cacheExtensions: function(currentRoom) {
        currentRoom.memory.extensions = currentRoom.find(FIND_MY_STRUCTURES, {
            filter: {
                structureType: "extension"
            }
        });
    },
    cacheWalls: function(currentRoom) {
        currentRoom.memory.walls = currentRoom.find(FIND_STRUCTURES, {
            filter: {
                structureType: 'constructedWall'
            }
        });
    },

    cacheRamparts: function(currentRoom) {
        currentRoom.memory.walls = currentRoom.find(FIND_STRUCTURES, {
            filter: {
                structureType: 'rampart'
            }
        });
    },
}

module.exports = cacheManager;