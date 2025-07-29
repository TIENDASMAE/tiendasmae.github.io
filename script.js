
function login() {
    const password = document.getElementById('password').value;
    if (password === 'FLIALOSAMO') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Contraseña incorrecta');
    }
}
