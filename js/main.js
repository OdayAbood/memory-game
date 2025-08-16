let myblocks = document.querySelectorAll(".game-block");

blocks = [...myblocks]; 

let flippedblocks = [];

let orderRange = [...Array(myblocks.length).keys()];

let game = document.querySelector(".game");

shuffel(orderRange);

myblocks.forEach(function(myblock,index){
    myblock.style.order = orderRange[index];

    myblock.addEventListener("click",function(){
        flipblock(myblock);
    });


})

function flipblock(myblock){
    myblock.classList.add("is-flipped");

    flippedblocks = blocks.filter(function(flipped){
        return flipped.classList.contains("is-flipped");
    });

    if(flippedblocks.length ===2){

       stopclicking();

       hasmatched(flippedblocks[0],flippedblocks[1]);
    }
}

function stopclicking(){
    game.classList.add("no-clicking");

    setTimeout(function()
    {
        game.classList.remove("no-clicking");        
    },1000)
}

function hasmatched(first,second){
    if(first.dataset.id === second.dataset.id){
        first.classList.remove("is-flipped");
        second.classList.remove("is-flipped");

        first.classList.add("has-matched");
        second.classList.add("has-matched");
    }
    else
    {
        first.classList.remove("is-flipped");
        second.classList.remove("is-flipped");

    }
}

function shuffel(array){
    let current = array.length,
    temp,
    random;
    while(current>0){
        random = Math.floor(Math.random()*current);
        current--;
        temp = array[current];
        array[current]=array[random];
        array[random]=temp;
    } 
    return array;
}