const dataList = [
{
    hint : "A person who wander",
    word : "Harry Potter"
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
const hp = document.querySelector(".life");
let currentWord;
let currentHint;
let totalHp = 5;
let fakeWord = [];
let checked = false;
let usedWord =[];
let displayUseWord;



function check(event,i=0){
    checked = false;

    let correctindex =[];
    let inputedData = event.target.value;
    displayUseWord = '';
   
    for(let x=0; x < currentWord.length;x++){
        if(currentWord[x].toLowerCase() == inputedData.toLowerCase()){
            correctindex.push(x);
            checked = true;
            if(!usedWord.includes(currentWord[x].toLowerCase()))
                {
                    usedWord += [inputedData];
                    displayUseWord = [inputedData];
                }
            }
    }

    if(checked == false && !usedWord.includes(inputedData)){
        
        //life ghatne
        totalHp -= 1;
        console.log(hp.lastChild);
        hp.removeChild(hp.lastElementChild);

        usedWord += [inputedData];
        displayUseWord = [inputedData];
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
    // useBox.innerText="";
    dWord = document.createTextNode(fakeWord);
    wordBox.appendChild(dWord);

    if(displayUseWord){
        thrashBox = document.createElement('div');
        thrashWord = document.createTextNode(displayUseWord);
        thrashBox.appendChild(thrashWord);
        thrashBox.classList.add("usedwordList");
        useBox.appendChild(thrashBox);
    }
    

    //if correct word is found
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
        
        if(currentWord[x] != " "){
            fakeWord += "_";
        }
        else{
            fakeWord += " ";
        }
    }

    console.log(fakeWord);
    dWord = document.createTextNode(fakeWord)
    wordBox.appendChild(dWord); 

    useBox.innerText = usedWord;

    inputBox.addEventListener("input",check);
}


