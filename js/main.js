const validTxt = /[0-9A-ZáéíóúÑñÁÉÍÓÚ&@#%!¡¿?~]/
const inputTxt = document.getElementById('input-txt')
const outputTxt = document.getElementById('output-txt')
const encryptBtn = document.getElementById('encrypt-btn')
const decryptBtn = document.getElementById('decrypt-btn')
const copyBtn = document.getElementById('copy-btn')
const pasteBtn = document.getElementById('paste-btn')

// -> VALIDATE INPUT
function validInput(key) {
  if (inputTxt.value.match(validTxt)) {
    alert('Solo letras minúsculas y sin acentos')
    inputTxt.value = inputTxt.value.slice(0, -1)
  }
}
inputTxt.addEventListener('keyup', validInput)
//->

// -> ENCRYPT
function encrypt(e) {
  e.preventDefault()
  let inputValue = inputTxt.value
  let newStr = []
  for (let i = 0; i < inputValue.length; i++) {
    let newValue = inputValue[i].toString()
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat')
    newStr.push([newValue])
  }
  outputTxt.textContent = newStr.join('')
  inputTxt.value = ''
}
encryptBtn.addEventListener('click', encrypt)
// ->

// -> DECRYPT
function decrypt(e) {
  e.preventDefault()
  if (inputTxt.value != '') {
    let decryptTxt = inputTxt.value
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u')
    outputTxt.textContent = decryptTxt
  }
  inputTxt.value = ''
}
decryptBtn.addEventListener('click', decrypt)
// ->

// -> PASTE
async function pasteTxt(e) {
  e.preventDefault()
  const textCopied = await navigator.clipboard.readText()
  inputTxt.value = textCopied
  outputTxt.textContent = ''
}
pasteBtn.addEventListener('click', pasteTxt)
//  ->

// -> COPY
async function copyTxt(e) {
  e.preventDefault()
  const textToCopy = await navigator.clipboard.writeText(outputTxt.value)
}
copyBtn.addEventListener('click', copyTxt)
// ->

