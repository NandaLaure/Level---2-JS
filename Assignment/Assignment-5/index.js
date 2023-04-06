let balloon = document.getElementById('balloon');
window.addEventListener('keydown' , event => {
    if (event.key  == 'ArrowDown') {
        balloon.style.fontSize = '60px'
    }
    
})
window.addEventListener('keyup' , event =>{
    if (event.key == 'ArrowUp') {
        balloon.style.fontSize = '80px'
    } 

})