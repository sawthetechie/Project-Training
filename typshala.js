const easy = ["war","red","put","hat"];
const medium = ["puppy","hello","water","fruit"];
const hard = ["Kvaratskhelia","Schweinsteiger","Helicopter","Mkhitaryan"];

const displayBox = document.getElementById("wordDisplayBox");
const answerBox =document.getElementById("answerBox");
let score;

//for loading purposes

const loading = (wordSet,i=0)=>{
    score = 0;
    displayBox.innerText = 5-i;
    if(i<5){
        setTimeout(()=>{
            loading(wordSet,i+=1);
        },1000)
    }
    else{
        display(wordSet);
    }
}


//display word on screen

const display = (wordSet,i=0)=>{ 
    answerBox.value = "" 
    displayBox.innerText ="";
    const word = document.createTextNode(wordSet[i]);
    displayBox.appendChild(word);
    if(i < wordSet.length){
        setTimeout(()=>{
            display(wordSet,i+=1);
        },2000);
    }  
    else{
        displayBox.innerText =`Your total Score is ${score}`;
    }
}


//checks the user score

function scoreCheck(event){
    let userWord = event.target.value;
    if(displayBox.innerText.toLowerCase() == userWord.toLowerCase()){
        score += 1;
    }
}

answerBox.addEventListener("input",scoreCheck);




