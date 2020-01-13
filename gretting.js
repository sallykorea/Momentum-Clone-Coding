const form=document.querySelector(".js-form"),
    input=form.querySelector("input"),
    greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser";
const SHOWING_CN="showing";

function handleSubmit(event){
    event.preventDefalut();
    const currentValue=input.value;
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        
    }else{
        paintGreeting(currentUser);
    }   
}

function init(){
    loadName();
}

init();