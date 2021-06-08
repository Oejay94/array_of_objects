let arrayObj = [
    {
        username: 'user1',
        email: 'user1@gmail.com',
        password: 'wasd123',
        rememberMe: false
    },
    {
        username: 'user2',
        email: 'user2@gmail.com',
        password: 'wasd456',
        rememberMe: false
    }
]

for (let index = 0; index < arrayObj.length; index += 1) {
    let object = arrayObj[index]
    for (let property in object) {
        // console.log(property, object[property])
    }
}
console.log(arrayObj)
let formButton = document.getElementById('form_button')
let userNameInput = document.getElementById('name_input')
let emailInput = document.getElementById('email_input')
let passwordInput = document.getElementById('password_input')
let rememberInput = document.getElementById('remember_me');


formButton.addEventListener('click', function (event) {
    event.preventDefault();

    let username = userNameInput.value
    let email = emailInput.value
    let password = passwordInput.value
    let remember = rememberInput.checked

    let user = {
        username: username,
        email: email,
        password: password,
        rememberMe: remember
    }
    
    arrayObj.push(user)
    console.log(arrayObj)
})