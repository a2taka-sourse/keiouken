const buttonOpen = document.getElementById("btn1");
const buttonClose = document.querySelector(".modalclose");
const modal = document.getElementById("modal");


buttonOpen.addEventListener("click", (event) => {
    modal.style.display = "block";
});

buttonClose.addEventListener("click", (event) => {
    modal.style.display = "none";
});