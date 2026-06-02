const buttons = document.querySelectorAll('.box');
const counter = document.getElementById("counter");
const resetBtn = document.querySelector('#reset');

let count = 0;

buttons.forEach((item) => {
    item.addEventListener(("click"), () => {
        if(item.innerText.trim() === "+") {
            count++;
        } else if( count > 0) {
            count--;
        }

        counter.innerText = count;
    });
});


resetBtn.addEventListener(("click"), () => {
    count =0;
    counter.innerText = count;
})