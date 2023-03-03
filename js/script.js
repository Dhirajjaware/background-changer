'use strict';

const inputColor = document.querySelector('.input__color');

const btnSetColor = document.querySelector('.btn__set-background');

const soundClick = new Audio('sounds/click.mp3');

btnSetColor.addEventListener('click', function (e) {
  soundClick.play();
  e.preventDefault();
  btnSetColor.style.border = '0.2px inset white';
  btnSetColor.style.transition = '0.2s';

  btnSetColor.style.boxShadow = '0px 0px 10px #ECF2FF';

  document.querySelector('body').style.backgroundColor = `${inputColor.value}`;
});


