const images = ["blankets.png", "distracted.jpg", "mcdonalds.png", "offended.jpg", "soup.gif"]
const left = document.getElementById("left")
const right = document.getElementById("right")
const main = document.getElementById("original")
const second = document.getElementById("second")
let index = 0

right.addEventListener("click",(e) => {
    main.style.animation = "2s slide 1 normal"
    second.style.animation = "2s slide 1 normal"
    second.hidden = false
    main.addEventListener("animationend",(event) => {
        index += 1
        main.src =  "/cats/" + images[index % (images.length - 2)]
        second.src = "/cats/" + images[index+1 % (images.length - 2)]
        main.style.animation = ""
        second.style.animation = ""
        second.hidden = true
    })
})