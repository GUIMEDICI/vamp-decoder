const inputText = document.querySelector(".text-enc")
const outputText = document.querySelector(".text-desc")

function encriptarTexto() {
   let encriptedText = encriptar(inputText.value)
   outputText.value = encriptedText
}

function encriptar(encriptedString) {
    let arrayCriptografia = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
    encriptedString = encriptedString.toLowerCase()

    for(let i=0; i < arrayCriptografia.length; i++) {
        if(encriptedString.includes(arrayCriptografia[i][0])){
            encriptedString = encriptedString.replaceAll(arrayCriptografia[i][0], arrayCriptografia[i][1])
        }
    }
    return encriptedString
}

function descriptBtn() {
    const descriptedText = descriptografarTexto(inputText.value)
    outputText.value = descriptedText
}

function descriptografarTexto(descriptedString) {
    let arrayCriptografia = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
    descriptedString = descriptedString.toLowerCase()

    for(let i = 0; i < arrayCriptografia.length; i++) {
        if(descriptedString.includes(arrayCriptografia[i[1]])) {
            descriptedString = descriptedString.replaceAll(arrayCriptografia[i[1]], arrayCriptografia[i[0]])
        }
    } return descriptedString
}

// // // // // // // // function clearText() {
// // // // // // // //     document.querySelector("textarea").value = ""
// // // // // // // // }

// <div>
// <button class="cleaner" onclick="cleanText()">Limpar</button>
// </div>