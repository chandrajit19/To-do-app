
const inputElemnt=document.querySelector('#input-field');
const btnElement=document.querySelector('#btn');
const dateElement=document.querySelector('#input-date');
const formElement=document.querySelector('#form-value');
const displayContainer=document.querySelector('.display-container');
// myObject array local storage se fetch kar rahe hain jo purane todo items ko load karega jab page reload hoga.
const myObject = JSON.parse(localStorage.getItem("objectArray")) || [];
display();

// Add btn functionality
btnElement.addEventListener("click", function(e){
      e.preventDefault();
      if(inputElemnt.value && dateElement.value){
  
     // storing data in object 
     const newObject={
        text: `${inputElemnt.value}`,
        date: `${dateElement.value}`
       }
       // this newObject pushing inside the myObject array
     myObject.push(newObject);

      // now storing myObject Array in local storage
       localStorage.setItem("objectArray", JSON.stringify(myObject));

            display();
            inputElemnt.value='';
            dateElement.value='';
         }
   })


  // using Event delegation on parent to delete element  
     displayContainer.addEventListener("click", function(e){
        e.preventDefault();
        if(e.target.classList.contains("dlt-btn")){
            const index = e.target.getAttribute("data-index");
            console.log(index);
            myObject.splice(index, 1); 
            localStorage.setItem("objectArray", JSON.stringify(myObject));
            display(); 
        }
       
       })





function display(){
        //making free the container
        displayContainer.innerHTML = '';                 
        myObject.forEach((element, index)=>{
        const divElement=document.createElement('div'); // created new DIV
        divElement.classList.add('per-item', 'box02');  // adiiding css classes for styling
        divElement.innerHTML=`<span>${element.text}</span>
        <span>${element.date}</span>
        <button class="dlt-btn" data-index="${index}">Delete</button>`;
        displayContainer.append(divElement);
        console.log(index)
       
                });

        }

