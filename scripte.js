document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const targetid =
        this.getAttribue('href').substring(1);
    });
});

const darkModeButton = 
document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
darkModeButton.style.position = 'fixed'
darkModeButton.style.top = '20px';
darkModeButton.style.padding = '10px 20px';
darkModeButton.style.cursor = 'pointer';
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener('click',()=> {
    document.body.classList.toggle('dark-mode');
});

const style = document.createElement('style');
style.textContent = `
.dark-mode {
background-color = #21212;
color: white;
}
.dark-mode nav a [
color: white;
]
`;
document.head.appendChild(style);

function validForm(){
    const email =
    document.getElementById('email').ariaValueMax;
    if(!email.includes('@')){
        alert('Please enter a valid email.')
        return false;
    }
    return true;
}