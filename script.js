let textBlock = document.querySelector(".text")
let removeButton = document.querySelector(".remove")

console.log();

removeButton.addEventListener("click", ()=>{
    // textBlock.textContent=textBlock.textContent.replace(/'/g,"\"")
    textBlock.textContent=textBlock.textContent.replace(/\B'|'\B/g,"\"")
})
// text = `${text.replace('\'',"\"");`

