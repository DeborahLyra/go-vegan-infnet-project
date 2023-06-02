//RADIO
const radioInput = document.querySelectorAll('.radio-input');

radioInput.forEach(element => {
   element.addEventListener('click', () => {
      removerClasses();
      element.classList.add('checked');
   })
});
function removerClasses() {
   radioInput.forEach(radioInput => {
      radioInput.classList.remove('checked');
   })
}


//SELECT

const selectInput = document.querySelector('.select-input');
const dropDown = document.querySelector('.dropDown');
const itemDropDown = document.querySelectorAll('.item-dropDown')

selectInput.addEventListener('focus', () => {
    dropDown.style.display = 'block';
    
})

selectInput.addEventListener('blur', () => {
    dropDown.style.display = 'none';
})

itemDropDown.forEach(item => {
    item.addEventListener("mousedown", () => {
        const text = item.innerHTML;
        selectInput.value = text;
    })
})


//  CHECKBOX

const checkboxInput = document.querySelectorAll('.checkbox-input');

checkboxInput.forEach(element => {
   element.addEventListener('click', () => {
      element.classList.toggle('checked');
   })
});

const checkAll = document.querySelector('.checkAll')

checkAll.addEventListener('click', () => {
   if (checkAll.classList.contains('checked')) {
      checkboxInput.forEach(element => {
         element.classList.add('checked');
      });
   } else {
      checkboxInput.forEach(element => {
         element.classList.remove('checked');
      });
   }
})

//FORM GERAL
const inputForm = document.querySelectorAll('.input-form');
const button = document.querySelector('.btn');
const obrigatorio = document.querySelectorAll('.obrigatorio');
const validation = document.querySelector('.validation')


button.addEventListener('click', (event) => {
   event.preventDefault()

   inputForm.forEach((element, i) => {
      if (element.value !== '') {
         inputForm[i].classList.add('correct')
      } else {
         inputForm[i].classList.add('notCorrect')
         obrigatorio[i].classList.add('showMessage')
      }
   });

});






