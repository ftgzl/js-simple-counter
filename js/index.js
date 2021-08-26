let counter = 0;
let counterDOM = document.getElementById("counter")
let increaseDOM = document.getElementById("increase")
let decreaseDOM = document.getElementById("decrease")

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", counterEvent);
decreaseDOM.addEventListener("click", counterEvent);

function counterEvent(){
  console.log(this.id);
  this.id == "increase" ? counter+=1 : counter-=1;
  
  counterDOM.innerHTML= counter;
}
