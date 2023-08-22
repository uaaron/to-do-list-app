function newItem(){

    // add new item to list of items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!")
    } else {
        $('#list').append(li);
    }

    //crossing out item from list of items
    function crossOut() {
        li.toggleClass('strike')
    }

    li.on('dblclick', crossOut);



    // add delete button



     /* 
     Original code before looking at the solution

     crossOutButton selector in CSS was changed to #crossOutButton

     let crossOutButton = $('<button id=crossOutButton>X</button>');
     li.append(crossOutButton);
     */



    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    //add delete class to list item
    function deleteListItem() {
        li.addClass('delete');
    }


}