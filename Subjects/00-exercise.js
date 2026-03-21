function toggleButton(selector){
    let button = document.querySelector(selector);
    if(button.classList.contains('is-toggled')){

        button.classList.remove('is-toggled');

    }
    else{
        turnOffPre();
        button.classList.add('is-toggled');
    }
}
function turnOffPre(){
    const preButton = document.querySelector('.is-toggled');

    if(preButton)
        preButton.classList.remove('is-toggled');
}
// fuck y