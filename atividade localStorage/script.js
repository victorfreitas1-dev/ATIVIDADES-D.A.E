let nameItem = document.querySelector("#nameItem");
let button = document.querySelector("#mybutton");
let ul = document.querySelector("#listaTarefas");

let id = localStorage.length;

button.addEventListener("click", () => {
    localStorage.setItem(id, nameItem.value);

    let newLi = document.createElement("li");
    newLi.innerText = localStorage.getItem(id);
    
    id += 1;
    ul.append(newLi);
    nameItem.value = "";
});

for(let i = 0; i < localStorage.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = localStorage.getItem(i);

    ul.append(newLi);
}