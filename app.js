function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

document.getElementById('processButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.getElementById('outputText');
    const action = document.querySelector('input[name="action"]:checked').value;
    
    let result = '';
    if (action === 'encriptar') {
        result = encriptar(inputText);
    } else {
        result = desencriptar(result);
    }
    
    outputTextArea.value = result;
});