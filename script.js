const container = document.querySelector(".container");
const max = 800;
const square = document.createElement("div");
square.className = "square";
var dimension = 20;
var random = false;
makegrid();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomize(){
    random = true;
}

function derandomize(){
    random = false;
    
}

function makegrid() {
    for (var i = 0; i < dimension * dimension; i++){
        square.style.height = max/dimension + 'px';
        square.style.width = max/dimension + 'px';
        container.appendChild(square.cloneNode(true));
    }


    const squares = document.querySelectorAll(".square");
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', function(e){
            if (random){
                sqr.style.background = getRandomColor();
            } else {
                sqr.style.background = "black";
            }
            //sqr.classList.add("hov");
        });
    });
}

function clearboard(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((sqr) => {
            //sqr.classList.remove("hov");
            sqr.style.background = "white";
    });
}

function setsize(){
    var temp = prompt("Please select the number of squares per side.");
    if (temp>0){
        dimension = temp;
        while (container.firstChild ){
            container.removeChild(container.firstChild);
        }
        makegrid();
    }
    else {
        alert("Error, expected number > 0");
    }
}