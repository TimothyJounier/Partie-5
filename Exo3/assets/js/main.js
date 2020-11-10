let form = document.querySelector("#loginForm");


 // Ecoute de la modification du Nom 
form.name.addEventListener('change', function(){
    validName(this);
})
// Ecoute de la modification de l'Email
form.email.addEventListener('change', function(){
    validEmail(this);
});
// Ecoute de la modification de l'Age
form.age.addEventListener('change', function(){
    validAge(this);
});



// ********** Validation Name *********** //
const validName=function(inputName){
    // reg exp validatio Name 
    let nameRegExp = new RegExp('^[A-Z][A-Za-z\é\è\ê\-]+$');

    let testName = nameRegExp.test(inputName.value);
    let small = inputName.nextElementSibling;

    if(testName){
        small.innerHTML = " Nom valide";
        small.style.color = "green";

    }else {
        small.innerHTML = " Nom non valide";
        small.style.color = "red";
    }


}

// ********** Validation EMAIL *********** //
const validEmail=function(inputEmail) {
    // reg exp validation Email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    let testEmail = emailRegExp.test(inputEmail.value);
    let small = inputEmail.nextElementSibling;

    if(testEmail){
        small.innerHTML = "Adresse Valide";
        small.style.color = "green";
        
        
    }else {
        small.innerHTML = "Adresse non Valide";
        small.style.color = "red";
        }
}

// ********** Validation Age *********** //
const validAge=function(inputAge){
    // reg exp validation Age
    let ageRegExp = new RegExp('^[0-9]{1,6}$');

    let testAge = ageRegExp.test(inputAge.value);
    let small = inputAge.nextElementSibling;

    if(testAge){
        small.innerHTML = "Age Valide";
        small.style.color = "green";


    }else {
        small.innerHTML = "Age non Valide";
        small.style.color = "red";
    }
}