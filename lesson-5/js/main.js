

function validate(){
    let username = document.getElementById('usernameinput').value;
    let password = document.getElementById('passwordinput').value;
    if (username !== 'username' && password !== 'password'){
        alert('Username = username :::: Password = password')
    } else if (username == 'username' && password == 'password') {
        alert('logged in successfully')
        window.location = "google.com"
    } else {
        alert('fail')
    }
    return false
}