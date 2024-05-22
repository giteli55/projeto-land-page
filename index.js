var setaDireita = window.document.getElementById("seta-direita")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samatha = window.document.getElementById("samatha")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    bruna.style ="display:none"
    samatha.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:55px"

}

function RolarParaEsquerda() {
    bruna.style = "display: flex"
    samatha.style = "display: none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}
