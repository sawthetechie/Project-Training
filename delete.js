var list;

const titles = ["Hero Academy", "Harmin Gonzales", "PowerUp"];
const box = document.getElementById("tito");

var i =0;

const create = ()=>{
    titles.forEach((data) => {
    let liEl = data;
    console.log(liEl);
    list = document.createElement('li');
    let lidata = document.createTextNode(data);
    list.setAttribute("id",i)
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    let deletebox = document.createElement('button');
    deletebox.innerText = "Delete";
    list.appendChild(lidata);
    list.appendChild(checkbox);
    list.appendChild(deletebox);
    box.appendChild(list);
    i++;  

    deletebox.addEventListener("click", ()=>{
        deletion();
        i = 0;
        create();
    });
});
}

const deletion = ()=>{
    for(let j=0; j < box.children.length; j++){
        let liEl = document.getElementById(j);
        console.log(j);
        console.log(liEl);
        checkbox = liEl.querySelector("input");
        if(checkbox.checked == true){
            console.log(checkbox.parentNode.id);
            index = checkbox.parentNode.id;
            titles.splice(index, 1);
            console.log(titles);
        }
    }
        box.replaceChildren();
}


create();

const delAl =document.getElementById("deleteAl");

delAl.addEventListener("click", ()=>{
        for(let j =0; j < box.children.length;j++ ){
            let liEl = document.getElementById(j);
            liEl.querySelector("input").checked = true; 
        }
        var verify = confirm("Do you want to delete all data?");
            if(verify == true){
                deletion();
            }
    }
);

