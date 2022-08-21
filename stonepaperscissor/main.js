let user =-1;
let comp = -1;
let user_score = 0;
let comp_score = 0;
let m1 = document.querySelector(".m1");
let m2 = document.querySelector(".m2");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let userscore = document.querySelector(".user_score");
let compscore = document.querySelector(".comp_score");
const weapons = ["Rock","Paper","Scissor"];

function getcomp(){
    return Math.floor(Math.random()*10)%3;
}
rock.onclick = () => {
    user = 0;
    game();
}
paper.onclick = () =>{
    user =1;
    game();
}
scissor.onclick = () =>{
    user = 2;
    game();
}

document.querySelector(".start_button").onclick = () => {
    document.querySelector(".startscreen").classList.add("hidden");
    document.querySelector(".gameh1").classList.remove("hidden");  
    document.querySelector(".gamebody").classList.remove("hidden");
    document.querySelector(".footer").classList.remove("hidden");
}
document.querySelector(".again").onclick = () => {
    document.querySelector(".results").classList.add("hidden");
    userscore.textContent = 0;
    compscore.textContent = 0;
    user = -1;
    comp = -1;
    user_score = 0;
    comp_score = 0;
}

function game(){
    comp = getcomp();
    if(user == comp){
        m1.textContent = "It's a tie!";
        m2.textContent = weapons[user] + " ties with " + weapons[comp];
    }
    else if(
            (user == 0 && comp == 1) ||
            (user == 1 && comp == 2) ||
            (user == 2 && comp == 0) ){
        m1.textContent = "You Lost!";
        m2.textContent = weapons[user] + " is beaten by " + weapons[comp];
        comp_score+=1;
        compscore.textContent = comp_score;
    }
    else if(
            (user == 0 && comp == 2) ||
            (user == 2 && comp == 1) ||
            (user == 1 && comp == 0) ){
        m1.textContent = "You Won!";
        m2.textContent = weapons[user] + " beats " + weapons[comp];
        user_score +=1;
        userscore.textContent = user_score;
    }
    if(user_score == 5 ){
        document.querySelector(".result_text").textContent = "You Won!";
        document.querySelector(".results").classList.remove("hidden");
    }
    else if( comp_score == 5){
        document.querySelector(".result_text").textContent = "You Lost!";
        document.querySelector(".results").classList.remove("hidden");
    }
}

