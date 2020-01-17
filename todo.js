/*  
    const something = document.querySelector("#hello") -> looking a #hello inside of document.

    const form = document.querySelector("#form")
    const something = form.querySelector("#hello") -> looking for #hello inside of #form
*/
const toDoForm=document.querySelector(".js-toDoForm"),
    toDoInput=toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";

function handleSubmit(event){
    console.log('dd');
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos(){
    const toDos=localStorage.getItem(TODOS_LS);
    if(toDos!==null){
        
    }
    
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();