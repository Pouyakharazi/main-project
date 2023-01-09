 let backdrop = document.querySelector('.backdrop')

//  console.log(backdrop)
// backdrop.style.display = 'block'

 let modal = document.querySelector('.modal')

let selectPlanBtn = document.querySelectorAll('.plan button')


for (let i = 0; i < selectPlanBtn.length ; i++) {
      selectPlanBtn[i].addEventListener('click', () => {
      modal.style.display = 'block'
      backdrop.style.display = 'block'
      })
}