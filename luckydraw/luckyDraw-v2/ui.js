// This software will pick 3 numbers, one by one,
// you can set limitation for the range of each number.

// Improvement:
// every time a 3-digit integer is drawn,
// the value will be stored.
//

// version 2.0

const ui = Object.create(null);

ui.init = function (){
    const el = (id) => document.getElementById(id); 
    const drawButton = el("draw-btn");
    const randNumber = el("random-number");
    const resetBtn = el("reset-btn");
    const testBtn = el("test-btn");

    const numbers = []; // store the final number

    numbers[0] = el("number1");
    numbers[1] = el("number2");
    numbers[2] = el("number3");

    let counter = 0; // count the number of drawn
    let result = undefined; // initialize drawn results
    let duplicate = [];

    const generateNumber = function (max, min) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        // if max is 9 , min is 0, results can be [0,9]
        return random;
    };

    const rollNumber = function () {
        drawButton.textContent = "rolling...";
        const max = (counter === 2) ? 9
            : (counter === 1) ? 5
            : 2;
        const min = 0;
        let timerId = setInterval(() => {
                randNumber.textContent = generateNumber(max, min);
            }, 100);
            // after x seconds stop
        setTimeout(() => {
            clearInterval(timerId);
            checkDuplicate();
        }, 1000);
    };

    const checkDuplicate = function () {
        if (counter >= 2) {
            const luckynumber = storeDuplicate();
            if (duplicate.hasOwnProperty(luckynumber)) {
                console.log(luckynumber + " is a duplicate.");
                reset();
            }
        }
        showResults();
    };

    const showResults = function () {
        result = randNumber.textContent;
        console.log(randNumber.textContent);
        randNumber.style.color = "orange";
        numbers[counter].textContent = result;
        numbers[counter].style.color = "orange";
        drawButton.textContent = "Let's Go!";
        counter = counter + 1;
    };

    const clearRandom = function () {
        randNumber.style.color = "white";
        randNumber.textContent = "?";
    };

    const reset = function () {
        clearRandom();
        counter = 0;
        duplicate.push(storeDuplicate());
        numbers.forEach((x) => {
            x.textContent = "?";
            x.style.color = "white";
        });
        console.log(duplicate);
    };

    const storeDuplicate = function () {
        let luckyNumber = "";
        numbers.forEach((x) => {
            const digit = String(x.textContent);
            luckyNumber = luckyNumber + digit;
        });
        // console.log("Duplicated Stored:");
        // console.log(duplicate);
        return luckyNumber;
    };

    drawButton.addEventListener("click", () => {
        if (counter >= 3) {
        // return alert("Please press the 'RESET' button.");
            reset();
        }
        clearRandom();
        rollNumber();
    });

    resetBtn.addEventListener("click", function () {
        reset();
    });

    testBtn.addEventListener("click", () => {
        let timerId = setInterval(() => {
                if (counter >= 3) {
                    // return alert("Please press the 'RESET' button.");
                    reset();
                }
                clearRandom();
                rollNumber();
            }, 1000);
            // after 5 seconds stop
        setTimeout(() => {
            console.log("ENDDDD!!!!!!!!!");
            clearInterval(timerId);
        }, 49999);
    });

};

export default Object.freeze(ui);