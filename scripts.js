const ModalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        ModalOverlay.classList.add('active')
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    ModalOverlay.classList.remove("active")
})
    
