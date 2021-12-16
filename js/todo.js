var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');

//remove all 

removeAll.onclick = function(){
    list.innerHTML = '';
}

//add

add.onclick = function(){
   addlis(list);
   document.getElementById('user-input').value = '';
   document.getElementById('user-input').focus();
}

function addlis(targetUl){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + '');
    var removeButton = document.createElement('button');

    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = '&times;';
        removeButton.setAttribute('onclick', 'removeMe(this)');
    
        li.appendChild(textNode);
        li.appendChild(removeButton)
        targetUl.appendChild(li);
    } else {
        alert("Please enter a todo")
    }


}


function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}




    







