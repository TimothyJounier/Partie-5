const p = document.getElementsByTagName('p').item(0);

window.addEventListener('scroll', function(){

    document.getElementsByTagName('p').item(0).style.fontSize = ((scrollY*0.001) + 1) + "em";
});