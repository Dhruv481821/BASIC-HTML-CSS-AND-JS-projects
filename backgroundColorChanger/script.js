const buttons = document.querySelectorAll("button");
const color = document.getElementById("color");




buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.id)
        
        if(btn.id === "random") {
            
            const colors = [
                "red",
                "green",
                "blue",
                "black",
                "white",
                "magenta",
                "pink"
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);

            const randomColor = colors[randomIndex];

            document.body.style.backgroundColor = randomColor;
            color.innerText = randomColor;
        } else {

            document.body.style.backgroundColor = btn.id;
            color.innerText = btn.id;

        }
    });
});