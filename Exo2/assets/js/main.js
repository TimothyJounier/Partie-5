let button = document.getElementById("button");
button.onclick = function(e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    if ( password == confirmpassword) {
        document.getElementById('password').classList.add("borderColor1");
        document.getElementById('confirmpassword').classList.add("borderColor1");

    }else {
        document.getElementById('password').classList.add("borderColor2");
        document.getElementById('confirmpassword').classList.add("borderColor2");
    }
};