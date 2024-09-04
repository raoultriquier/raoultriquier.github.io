const back = document.querySelector("#avis")


const color = ["red", "blue", "white"]
let i = 0
setInterval(() => {
    back.style.background = color[i]

    i++
    if (i > color.length - 1) {
        i = 0;
    }
}, 1000);





