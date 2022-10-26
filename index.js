const sumar = document.getElementById("sumar")
const resta = document.getElementById("resta")

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