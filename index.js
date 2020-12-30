var sounds = document.querySelectorAll(".sound")
var items = document.querySelectorAll(".pad")
var balls = document.querySelector(".ball")

var colors = [
"#e23e57",
"#08d9d6",
"#f9ed69",
"#30e3ca",
"#3f72af",
"#6639a6",
]

items.forEach((item , index) =>{
    item.addEventListener("click" ,()=>{
    sounds[index].play()
    sounds[index].currentTime = 0;


    var newDiv = document.createElement("div")
    balls.appendChild(newDiv)
    newDiv.style.backgroundColor = colors[index]
    newDiv.style.animation = "jump 2s" ; 
    // newDiv.addEventListener("animatinend" , () =>{
        setTimeout(() =>{
            balls.removeChild(newDiv)
        }, 2000)
            // })

        })   
    
})
