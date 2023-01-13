let backdrop = document.querySelector(".backdrop");

//  console.log(backdrop)
// backdrop.style.display = 'block'

let modal = document.querySelector(".modal");

let selectPlanBtn = document.querySelectorAll(".plan button");

let modalClousBtn = document.querySelector(".modal__action--negative");

for (let i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener('click', closeModal);
modalClousBtn.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
