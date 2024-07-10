//grab all the inputs
//grab input id
//for each input add an update event listener
//on update check validity
//if valid then green & msg invisible borders if not red border
//add id to "-error" & makr that id visible

const inputs = Array.from(document.querySelectorAll('input')) 
inputs.forEach(input => {
    input.addEventListener('input',()=>{
        let id = input.id
        let errorMsg = document.querySelector(`#${id}-error`)
        if (!input.validity.valid){
            errorMsg.style.display = "block"
            input.style.border = "1px solid #FF6961"
            input.style.backgroundColor = "#FFB3B3"
        } else{
            errorMsg.style.display = "none"
            input.style.border="1px solid #77DD77"
            input.style.backgroundCcolor = "#B2F2BB"
        }
    })
});