const button = document.querySelector('button');

function popup(evt){
  alert(evt.currentTarget.tagName + ' Clicked');
}

button.addEventListener('click', popup);