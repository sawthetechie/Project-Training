const books = [{
    title : "Return of lords",
    price : 450,
    author: "Cameroon Dsouza"
},
{
    title : "Return of lords 2",
    price : 450,
    author: "Cameroon Dsouza"
},
{
    title : "Hari Putter",
    price : 50,
    author: "Cameroon Dsouza"
},
{
    title : "Hari Putter 2",
    price : 150,
    author: "Cameroon Dsouza"
}

];



let searchBox = document.getElementById("search");

searchBox.addEventListener('input',(event)=>{
    let tito =document.getElementById("tito");
    let searchName = event.target.value;
    tito.replaceChildren();
    const result = books.filter((boo)=>{
        if(boo.title.toLowerCase().includes(searchName.toLowerCase()) && searchName != '' && searchName != null){
            btitle = boo.title;
            const liEl = document.createElement('li');
            const lidata = document.createTextNode(btitle);
            liEl.appendChild(lidata);
            tito.appendChild(liEl);
        }
   })
   
   console.log(result);
})