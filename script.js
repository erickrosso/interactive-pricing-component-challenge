const range = document.querySelector("#range");
const valor = document.querySelector(".valor");
const view = document.querySelector(".views");
const radio = document.querySelectorAll(".radio");
const start = document.querySelector(".button");

start.addEventListener("click", function(){
    location.reload()
});

radio[1].addEventListener("change", desconto);
radio[0].addEventListener("change", semDesconto);

const plan = {"10K": 8, "50K": 12, "100K": 16, "500K": 24, "1M": 36}

range.addEventListener("input", function(){

    if(range.value == plan["10K"]){
        valor.innerHTML = range.value
        view.innerHTML = Object.keys(plan)[0]
    }
    if(range.value == plan["50K"]){
        valor.innerHTML = range.value
        view.innerHTML = Object.keys(plan)[1]
    }
    if(range.value == plan["100K"]){
        valor.innerHTML = range.value
        view.innerHTML = Object.keys(plan)[2]
    }
    if(range.value == plan["500K"]){
        valor.innerHTML = range.value
        view.innerHTML = Object.keys(plan)[3]
    }
    if(range.value == plan["1M"]){
        valor.innerHTML = range.value
        view.innerHTML = Object.keys(plan)[3]
    }
});

function desconto(){
    Object.keys(plan).forEach((x) => {
        plan[x] = plan[x]/4
    });
    range.attributes[2].value = 9;
    range.attributes[1].value = 2;
    valor.innerHTML = range.value
};

function semDesconto() {
    Object.keys(plan).forEach((x) => {
        plan[x] = plan[x]*4
    });
    range.attributes[2].value = 36;
    range.attributes[1].value = 8;
    valor.innerHTML = range.value
};



