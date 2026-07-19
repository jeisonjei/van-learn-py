let btn = document.querySelector("button")
btn.addEventListener("click", () => {
    let header = document.querySelector("h1")
    setTimeout(() => {header.textContent = "Bye, World!"}, 2000)
})
