const findTheOldest = function(objArray) {
    objArray.forEach(function(person) { 
        if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
    }});

    return (objArray.sort((person1,person2) => (person1.yearOfDeath - person1.yearOfBirth) > (person2.yearOfDeath - person2.yearOfBirth) ? 1 : -1)).pop();
};

// Do not edit below this line
module.exports = findTheOldest;

