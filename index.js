var buttons = document.getElementsByClassName("button");
var arr = [...buttons];
const root= document.querySelector(":root");

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";

    if (index == 0) {
      root.style.setProperty("--clr1-main-background","var(--th1-main-background)");
      root.style.setProperty("--clr2-toggle-keypad-background","var(--th1-toggle-keypad-background)");
      root.style.setProperty("--clr-screen-background","var(--th1-screen-background)");

      root.style.setProperty("--clr3-key-background","var(--th1-key-background)");
      root.style.setProperty("--clr4-key-shadow","var(--th1-key-shadow)");
      root.style.setProperty("--clr5-key-background-toggle","var(--th1-key-background-toggle)");
      root.style.setProperty("--clr6-key-shadow-toggle","var(--th1-shadow-toggle)");
      root.style.setProperty("--clr7-key-background2","var(--th1-key-background2)");
      root.style.setProperty("--clr8-key-shadow2","var(--th1-key-shadow2)");
      root.style.setProperty("--clr9-text1","var(--th1-text-grayish-blue)");
      root.style.setProperty("--clr10-text2","var(--th1-text-White)");
      root.style.setProperty("--clr11-text3","var(--th1-text-White)");

      } else if (index == 1) {
        root.style.setProperty("--clr1-main-background","var(--th2-main-background)");
        root.style.setProperty("--clr2-toggle-keypad-background","var(--th2-toggle-keypad-background)");
        root.style.setProperty("--clr-screen-background","var(--th2-screen-background)");
        root.style.setProperty("--clr3-key-background","var(--th2-key-background)");
        root.style.setProperty("--clr4-key-shadow","var(--th2-key-shadow)");
        root.style.setProperty("--clr5-key-background-toggle","var(--th2-key-background-toggle)");
        root.style.setProperty("--clr6-key-shadow-toggle","var(--th2-shadow-toggle)");
        root.style.setProperty("--clr7-key-background2","var(--th2-key-background2)");
        root.style.setProperty("--clr8-key-shadow2","var(--th2-key-shadow2)");
        root.style.setProperty("--clr9-text1","var(--th2-text-White)");
        root.style.setProperty("--clr10-text2","var(--th2-text-grayish-yellow)");
        root.style.setProperty("--clr11-text3","var(--th1-text-White)");
  
      } else if(index == 2){
        root.style.setProperty("--clr1-main-background","var(--th3-main-background)");
        root.style.setProperty("--clr2-toggle-keypad-background","var(--th3-toggle-keypad-background)");
        root.style.setProperty("--clr-screen-background","var(--th3-screen-background)");
        root.style.setProperty("--clr3-key-background","var(--th3-key-background)");
        root.style.setProperty("--clr4-key-shadow","var(--th3-key-shadow)");
        root.style.setProperty("--clr5-key-background-toggle","var(--th3-key-background-toggle)");
        root.style.setProperty("--clr6-key-shadow-toggle","var(--th3-shadow-toggle)");
        root.style.setProperty("--clr7-key-background2","var(--th3-key-background2)");
        root.style.setProperty("--clr8-key-shadow2","var(--th3-key-shadow2)");
        root.style.setProperty("--clr9-text1","var(--th3-text-Light-yellow)");
        root.style.setProperty("--clr10-text2","var(--th3-text-Light-yellow)");
        root.style.setProperty("--clr11-text3","var(--th3-text-Very-dark-blue)");
  
      }

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});


const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const del = document.querySelector(".del");
const screen = document.querySelector(".display");
let op = "";
let num1 = "";
let num2 = "";
nums.forEach(num => {
  num.addEventListener('click', (e) => {
    if(screen.innerHTML != 0)
    screen.innerHTML += e.currentTarget.innerHTML;
    else {
      screen.innerHTML = e.currentTarget.innerHTML;
    }
  });
});
del.addEventListener('click', () => {
  screen.innerHTML =  screen.innerHTML.slice(0,-1);
  if(screen.innerHTML.length == 0){
    screen.innerHTML = 0;
  }
});
reset.addEventListener('click', ()=> {
  defaults();
  screen.innerHTML = 0;
});
function defaults(){
  op = "";
  num1 = "";
  num2 = "";
}
operators.forEach(operator => {
  operator.addEventListener('click', (e) => {
    op = e.currentTarget.innerHTML;
    num1 = screen.innerHTML;
    screen.innerHTML = 0; 
  });
});
equal.addEventListener('click', (e) => {
  calculate();  
});

function calculate(){
  num2 = screen.innerHTML;
  switch(op){
    case "+":
    screen.innerHTML = parseInt(num1) +parseInt(num2);
    break;
    case "-":
    screen.innerHTML = num1 - num2;
    break;
    case "x":
    screen.innerHTML = num1 * num2;
    break;
    case "/":
    screen.innerHTML = num1 / num2;
    break;
  }
  defaults();
}