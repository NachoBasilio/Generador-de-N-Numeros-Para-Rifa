const sumar = document.getElementById("sumar")
const resta = document.getElementById("resta")
const rosa = document.getElementById("rosa")
const amarillo = document.getElementById("amarillo")
const azul = document.getElementById("azul")
const canvas = document.getElementById("canvas")


const cambiaValores =(operacion)=>{
    const nodos=document.getElementsByClassName("numero")
    const nodosArray = Array.from(nodos)
    if(operacion == "mas"){
        nodosArray.map((ele)=>{
            return ele.innerText = parseInt(ele.innerText) + 12
        })
    }else{
        nodosArray.map((ele)=>{
            return ele.innerText = parseInt(ele.innerText) - 12
        })
    }

}


sumar.addEventListener("click", ()=>{
    cambiaValores("mas") 
})
resta.addEventListener("click", ()=>{
    cambiaValores() 
})
rosa.addEventListener("click", ()=>{
    canvas.style.backgroundImage = "url('./3.png')";
})
amarillo.addEventListener("click", ()=>{
    canvas.style.backgroundImage = "url('./1.png')";
})
azul.addEventListener("click", ()=>{
    canvas.style.backgroundImage = "url('./2.png')";
})