


var arrPattern = [];
var count = 0;
var j = 0;


$("body").on("keypress", startGame);

function startGame() {
    // .    H1 - level 1
    // .    generate first pattern - show animation
    // .    wait for user click

    $("#level-title").text("Level 1");

    arrPattern = [];
    generatePattern(0);

    registerUserClick(0);
}

function nextLevel(i) {
    // .    H1 - level i+1
    // .    generate first pattern - show animation
    // .    wait for user click

    $("#level-title").text("Level " + (i + 1));

    generatePattern(i);
    console.log(arrPattern);

    count = 0;
    // registerUserClick(i);
}


/* 
*1. Generation of pattern
.   generate 4 random numbers
.   assign to button - show animation to user
.   add that to pattern array


*2. Checking of pattern, entered by user


*/


function generatePattern(i) {
    j = 0;

    // generate
    var randomOption = generateRandom(4);
    // animate
    showNextPatternAnimation(randomOption);
    // append in pattern array
    arrPattern[i] = randomOption;
}

function generateRandom(n) {
    var num = (Math.floor(n * Math.random())) + 1;
    return num;
}

function showNextPatternAnimation(n) {
    // 1-g 2-r 3-b 4-y
    var timeOut = 123;
    if (n == 1) {
        $("#green").addClass("nextPatternButton");
        setTimeout(function () {
            $("#green").removeClass("nextPatternButton");
        }, timeOut);
    }
    else if (n == 2) {
        $("#red").addClass("nextPatternButton");
        setTimeout(function () {
            $("#red").removeClass("nextPatternButton");
        }, timeOut);
    }
    else if (n == 3) {
        $("#blue").addClass("nextPatternButton");
        setTimeout(function () {
            $("#blue").removeClass("nextPatternButton");
        }, timeOut);
    }
    else if (n == 4) {
        $("#yellow").addClass("nextPatternButton");
        setTimeout(function () {
            $("#yellow").removeClass("nextPatternButton");
        }, timeOut);
    }
}

function gameOver() {
    // animation
    gameOverAnimation();

    // restart game
    $("body").on("keypress", startGame);
}

function gameOverAnimation() {
    var timeOut = 123;

    $("#level-title").text("Game Over, Press Any Key to Restart");

    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, timeOut);
}

function registerUserClick(i) {
    // .    animate
    // .    check if pattern was followed 
    // .    yes then check for next pattern
    // .    no then game over()
    // .    while 

    var flagNext = false;
    $(".btn").on("click", function (event) {
        console.log("j=" + j);
        // animate
        var userClickId = event.target.id;

        animateButtonClick(userClickId);

        // check if pattern was followed
        var userClickIdNum = idToIndex(userClickId);
        console.log(" "+userClickIdNum + " " +j+ " "+i+" "+ arrPattern[j]);

        if (userClickIdNum == arrPattern[j]) {
            // continue
            j++;
            flagNext = true;
        }
        else {
            j++;
            flagNext = false;
        }
        checkNext();
    });
    console.log("exit event listener");
    
    function checkNext() {
        if (j > i) {
            if (flagNext) {
                nextLevel(j);
                i++;
            }
            else {
                gameOver();
            }
        }
    }
}


function animateButtonClick(userClick) {
    var timeOut = 123;

    $("#" + userClick).addClass("pressed");
    setTimeout(function () {
        $("#" + userClick).removeClass("pressed");
    }, timeOut);
}

function idToIndex(id) {
    if (id == "green") {
        return 1;
    }
    else if (id == "red") {
        return 2;
    }
    else if (id == "blue") {
        return 3;
    }
    else if (id == "yellow") {
        return 4;
    }
    else {
        return -1;
    }
}