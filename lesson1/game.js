function startGame() {
    var gameContainer = document.getElementById("game-container");
    var target = document.querySelector(".target");

    var containerWidth = gameContainer.offsetWidth;
    var containerHeight = gameContainer.offsetHeight;

    var targetWidth = target.offsetWidth;
    var targetHeight = target.offsetHeight;

    var maxX = containerWidth - targetWidth;
    var maxY = containerHeight - targetHeight;

    function getRandomPosition(max) {
        return Math.floor(Math.random() * max);
    }

    function moveTarget() {
        var newX = getRandomPosition(maxX);
        var newY = getRandomPosition(maxY);
        target.style.top = newY + "px";
        target.style.left = newX + "px";
    }

    function handleClick() {
        alert("Bắn trúng gà!");
        moveTarget();
    }

    target.addEventListener("click", handleClick);
}