//RADIO
const radioInput = document.querySelectorAll('.radio-input');
const radioObrigatorio = document.querySelector('.radioObrigatorio')

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

function validateRadio() {
   for (let i = 0; i < radioInput.length; i++) {
      if (radioInput[i].classList.contains('checked')) {
         radioObrigatorio.classList.remove('showMessage')
         break
      } else {
         radioObrigatorio.classList.add('showMessage')
      }
   }
}

//SELECT

const selectInput = document.querySelector('.select-input');
const dropDown = document.querySelector('.dropDown');
const itemDropDown = document.querySelectorAll('.item-dropDown');
const selectObrigatorio = document.querySelector('.selectObrigatorio');

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

function validateSelect() {
      if (selectInput.value.length !== 0) {
         selectObrigatorio.classList.remove('showMessage')
         selectInput.classList.remove('notCorrect') 
         selectInput.classList.add('correct')
         console.log('1')
      } else {
         selectObrigatorio.classList.add('showMessage') 
         selectInput.classList.add('notCorrect') 
         selectInput.classList.remove('correct')
         console.log('2')
      }
}

console.log (selectInput.value.length)

//  CHECKBOX

const checkboxInput = document.querySelectorAll('.checkbox-input');
const checkboxObrigatorio = document.querySelector('.checkboxObrigatorio');

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

function validateCheckbox () {
   for (let i = 0; i < checkboxInput.length; i++) {
      if (checkboxInput[i].classList.contains('checked')) {
         checkboxObrigatorio.classList.remove('showMessage')
         break
      } else {
         checkboxObrigatorio.classList.add('showMessage')
      }
   }
}


//FORM GERAL
const inputForm = document.querySelectorAll('.input-form');
const button = document.querySelector('.btn');
const obrigatorio = document.querySelectorAll('.obrigatorio');
const requiredInputs = document.querySelectorAll('.required')

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');

function validateName() {
   if (requiredInputs[0].value.length >= 3) {
      removeError(0)
   } else {
      error(0)
   }
}

function validateEmail() {
   if (emailRegex.test(requiredInputs[1].value)) {
      removeError(1)
   } else {
      error(1)
   }
}

function validatePhone() {
   if (phoneRegex.test(requiredInputs[2].value)) {
      removeError(2)
   } else {
      error(2)
   }
}

function validateTextArea() {
   if (requiredInputs[3].value.length >= 5) {
      removeError(3)
   } else {
      error(3)
   }
}

button.addEventListener('click', (event) => {
   event.preventDefault();
   validateName();
   validateEmail();
   validatePhone();
   validateTextArea();
   validateRadio();
   validateCheckbox(); 
   validateSelect();

});

function error(i) {
   inputForm[i].classList.remove('correct')
   inputForm[i].classList.add('notCorrect')
   obrigatorio[i].classList.add('showMessage')
}

function removeError(i) {
   inputForm[i].classList.add('correct')
   inputForm[i].classList.remove('notCorrect')
   obrigatorio[i].classList.remove('showMessage')
}







