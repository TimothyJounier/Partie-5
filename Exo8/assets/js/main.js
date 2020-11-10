let button = document.getElementById("button");
button.onclick = function(clone) {

    clone = document.getElementById ("name").cloneNode(true);
    document.getElementById("nouveau_form").appendChild (clone);

    clone = document.getElementById("age").cloneNode(true);
    document.getElementById("nouveau_form").appendChild (clone);
};






   
