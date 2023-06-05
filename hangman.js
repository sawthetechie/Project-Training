const dataList = [
{
    hint : "A person who wander",
    word : "wanderer"
},
{
    hint : "Animal that have trunk",
    word : "Elephant"
}]
const hintBox  = document.getElementById("hint");
const wordBox = document.getElementById("word");
const useBox = document.getElementById("useBox");
const startButton = document.getElementById("start");
const inputBox =document.getElementById("inputBox");
const hp = document.getElementById("hp");
let currentWord;
let currentHint;
let fakeWord = [];
let checked = false;
let totalHp =5;
let usedWord =[];



function check(event,i=0){
    checked = false;

    let correctindex =[];
    let inputedData = event.target.value;
   
    for(let x=0; x < currentWord.length;x++){
        if(currentWord[x].toLowerCase() == inputedData.toLowerCase()){
            correctindex += x;
            checked = true;
            usedWord += [inputedData];
        }
    }

    if(checked == false && !usedWord.includes(inputedData)){
        totalHp -= 1;
        usedWord += [inputedData];
    }

    if(totalHp == 0){
        alert("GameOver");
    }
    
    console.log(usedWord);
    update(correctindex, inputedData);
   
}

function update(correctindex,inputedData){
   for (const a of correctindex) {
    fakeWord = fakeWord.split('');
    fakeWord[a] = inputedData;
    fakeWord = fakeWord.join('');
   }
    inputBox.value = "" 
    wordBox.innerText ="";
    useBox.innerText="";
    dWord = document.createTextNode(fakeWord);
    wordBox.appendChild(dWord);
    useBox.innerText = usedWord;
    hp.innerText =  totalHp ;

    if(fakeWord == currentWord.toLowerCase()){
        alert("You found the word "+ fakeWord);
        hintBox.innerText="";
        wordBox.innerText ="";
        fakeWord=[];
        usedWord =[];
        create(currentIndex+=1);
    }
}

const start = function(){
    currentIndex = 0;
    create(currentIndex);
}

function create(currentIndex){
    currentHint = dataList[currentIndex].hint;
    currentWord = dataList[currentIndex].word;
    
    startButton.style.visibility = 'hidden';
    let hintdata = document.createTextNode(currentHint);
    hintBox.appendChild(hintdata);


    for(x=0;x<currentWord.length;x++){
        fakeWord += "-";
    }
    console.log(fakeWord);
    dWord = document.createTextNode(fakeWord)
    wordBox.appendChild(dWord); 

    useBox.innerText = usedWord;

    inputBox.addEventListener("input",check);
}



