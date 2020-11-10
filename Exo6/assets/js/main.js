let form = document.getElementById('loginForm');

form.addEventListener('focus', function(event) { 
    event.target.style.borderColor = 'black';
}, true );

form.addEventListener('blur', function(event) {
    event.target.style.background = 'none';
}, true);