const notescontainer = document.getElementById('notescontainer');
const creatbtn = document.querySelector('.btn'); 

let notes = document.querySelectorAll('.inputbox');

function shownotes() {
    notescontainer.innerHTML = localStorage.getItem("notes") || "";
}
shownotes();

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

creatbtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let myImg = document.createElement('img');

    inputBox.className = 'inputbox';
    inputBox.setAttribute('contenteditable', "true");
    myImg.src = "images/delete.png";

    inputBox.appendChild(myImg);
    notescontainer.appendChild(inputBox);

    updateStorage(); // Update storage after adding new note
});

notescontainer.addEventListener('click', function(x) {
    if (x.target.tagName === "IMG") {
        x.target.parentElement.remove();
        updateStorage();
    }
    
});

notescontainer.addEventListener('input', function() {
    updateStorage(); // Save the notes whenever there is an input change
});

document.addEventListener('keydown' , event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})