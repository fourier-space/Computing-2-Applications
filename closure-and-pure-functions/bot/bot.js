// here is a more practical example which used closure
// for a user interface.
// Note that this system is still prone to errors.

const bot = function () {
    const status = {
    // private properties
        energyPoint: 10,
        location: [0, 0, 0]
    };

    const useEnergy = function (amt) {
    // private method that can get access to private properties
        const tmp = status.energyPoint - amt;
        if (tmp <= 0) {
            status.energyPoint = 0;
            return console.log("out of energy");
        }
        else {
            status.energyPoint -= amt;
            return status.energyPoint;
        }
    };

    const chargeEnergy = function (amt) {
        const tmp =status.energyPoint + amt;
        if (tmp >= 10) {
            status.energyPoint = 10;
            return console.log("Fully charged Now");
        }
        else {
            status.energyPoint += amt;
            return status.energyPoint;
        }
    };

    const relocate = function (coordinates) {
    // private method that updates the bot location status
        status.location = coordinates;
        console.log(status.location);
    };

    const getCoordinates = function (arr) {
        let coordinates = [];
        arr.forEach((x) => {
            coordinates.push(x);
        });
        return coordinates;
    };

    const rescueTargets = {
    // private properties
        "pool": [1, 1, 1],
        "school":[0, 2, 0],
        "tower": [1, 0, 2]
    };

    return {
    // these are public properties and methods
        checkStatus: function () {
        // public method to log status
            return status;
        },

        newTargets: function(target, coordinates){
        // public method to set a new rescue target
            rescueTargets[target] = coordinates;
            return rescueTargets;
        },

        rescue: function() {
        // priviledged methods can calls a private method to
        // manipulate the private property
            useEnergy(3);

            // implement your own code to remove the rescue target
            // after the rescue common is called
        },

        recharge: function () {
        // priviledged methods can calls a private method to
        // manipulate the private property
            chargeEnergy(5); // add 5 to energypoints
        },

        currentLocation: function () {
        // priviledged method that will access private methods
            return getCoordinates(status.location);
        },

        moveTo: function (coordinates) {
        // takes an array [x,y,z] and update the Bot status
        // the bot will move to the input coordinates
        // and consume energy point equal to shortest distance traveled
            const now = getCoordinates(status.location);
            /*
            const x1 = coordinates[0];
            const y1 = coordinates[1];
            const z1 = coordinates[2];
            const distance = ((x1-now[0])**2 + (y1-now[1])**2 + (z1-now[2])**2) ** 0.5;
            */
            let distanceSqure = 0;
            coordinates.forEach((axis, i) => {
                distanceSqure += (axis - now[i])**2;
            });
            relocate(coordinates);
            useEnergy(distanceSqure**0.5);
        }
    };
};

export default Object.freeze(bot);