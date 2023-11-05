const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    
});
// to make sure those button works
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");

});