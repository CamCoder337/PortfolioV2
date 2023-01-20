const loader = document.querySelector('.loader-container');


function init(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        loader.style.z-index == -1000;
    }, 4000);
}


init();