var arrPattern = [];

$("body").on("keypress", function (event) {
    startGame();
});

function startGame() {
    // .    H1 - level 1
    // .    generate first pattern - show animation
    // .    wait for user click

    $("#level-title").text("Level 1");

    arrPattern = [];
    generatePattern(0);

    registerUserClick();
}


/* 
*1. Generation of pattern
.   generate 4 random numbers
.   assign to button - show animation to user
.   add that to pattern array


*2. Checking of pattern, entered by user


*/


function generatePattern(i) {
    // generate
    var randomOption = generateRandom(4);
    // animate
    showNextPatternAnimation(randomOption);
    // append in pattern array
    arrPattern[i] = randomOption;
}

function generateRandom(n) {
    var i = (Math.floor(n * Math.random())) + 1;
    return i;
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


function gameOverAnimation() {
    var timeOut = 123;

    $("#level-title").text("Game Over, Press Any Key to Restart");

    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, timeOut);
}

function registerUserClick() {
    // .    animate
    // .    check if pattern was followed 
    // .    yes then check for next pattern
    // .    no then game over()
    // .    while 
    var timeOut = 123;

    $(".btn").on("click", function (event) {
        $("#" + event.target.id).addClass("pressed");
        setTimeout(function () {
            $("#" + event.target.id).removeClass("pressed");
        }, timeOut);
    });

}