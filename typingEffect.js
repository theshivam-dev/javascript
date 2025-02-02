const paragraph = document.getElementById('paragraph');
const myName = 'I am developer';
let index = 0;

setInterval(() => {
    if (index < myName.length) {
        paragraph.innerHTML += myName[index]; 
        index++;
    } else {
        index = 0;
        paragraph.innerHTML = ''; 
    }
}, 500); 
