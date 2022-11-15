const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv')

var calculate = 0

button.addEventListener('click',go);

function go(){
    if(input.value != ""){
      calculate++;
    var paragraf = document.createElement('p');
    var deleteButton = document.createElement('p');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'X';
    paragraf.innerText = calculate + ')' + input.value;
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteButton)
    input.value = "" ;


    deleteButton.addEventListener('click',function(){
      contentDiv.removeChild(paragraf);
    });
    }
}
