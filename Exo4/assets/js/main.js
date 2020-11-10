let img = document.querySelector('img');

img.addEventListener('click', () =>{
    img.src = 'assets/img/img2.jpg';
});

let magnifying_area = document.getElementById("magnifying_area");
let magnifying_img = document.getElementById("magnifying_img");

magnifying_area.addEventListener("mousemove" ,function(event){
    clientX = event.clientX - magnifying_area.offsetLeft
    clientY = event.clientY - magnifying_area.offsetTop

    mWidth = magnifying_area.offsetWidth
    mHeight = magnifying_area.offsetHeight

    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100

    magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
});

magnifying_area.addEventListener('mouseleave',function(){
    magnifying_img.style.transform = 'tranlate(-50%,-50%) scale(1)'
});
