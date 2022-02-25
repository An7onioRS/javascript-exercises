const removeFromArray = function(array, arg) {
    let args = Array.from(arguments);
        args.shift();

        for (let i = 0; i < args.length; i++) {
            let currentElement = args[i];

            if (array.includes(currentElement)) {
                const index = array.indexOf(currentElement);
                array.splice(index, 1);
            }
        }

        return array;
    };

// Do not edit below this line
module.exports = removeFromArray;
