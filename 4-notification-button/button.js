var notify = document.querySelector('.notify');
var btnActive= document.querySelector('.btn-activate');
var btnReset= document.querySelector('.btn-reset')
btnActive.addEventListener('click', active);
btnReset.addEventListener('click',reset);


function active(){
    var add =Number(notify.getAttribute('data-count') ||  0);
    notify.setAttribute('data-count', add + 1);
    if(add===0){
        notify.classList.add('add-numb');
    }
   }


   function reset(){
        var initial= 0
        notify.setAttribute('data-count', initial)
   }