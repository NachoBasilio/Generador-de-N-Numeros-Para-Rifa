const sumar = document.getElementById("sumar")
const resta = document.getElementById("resta")
const rosa = document.getElementById("rosa")
const amarillo = document.getElementById("amarillo")
const azul = document.getElementById("azul")
const canvas = document.getElementById("canvas")
const pdf = document.getElementById("pdf")
const NumeroDePagina = document.getElementById("NumeroDePagina")
let nDePagina = 1
let numeroinicial = 1
let numerofinal = 12

const cambiaValores =(operacion)=>{
    const nodos=document.getElementsByClassName("numero")
    nDePagina += 1
    NumeroDePagina.innerText = "Numero de pagina: " + nDePagina
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
    imagen.src = "./3.png";
})
amarillo.addEventListener("click", ()=>{
    imagen.src = "./1.png";
})
azul.addEventListener("click", ()=>{
    imagen.src = "./2.png";
})
