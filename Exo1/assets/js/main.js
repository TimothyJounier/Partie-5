let button = document.getElementById("button");
button.onclick = function(e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    if ( password == confirmpassword) {
        document.getElementById('password').style.borderColor = "green";
        document.getElementById('confirmpassword').style.borderColor = "green";

    }else {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('confirmpassword').style.borderColor = "red";
    }
};