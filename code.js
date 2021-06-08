/*
All variables name used in this demo are kept simple for demostration purposes.
Try to use better variable names when working on things like this in the future

our goal is to create functionality that takes information provided by the user when filling out a form,
assign that information to properties of an object, and add that object to an array(list) of objects.
*/

//an array of objects variable
//objects have built in values provided by the developer
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

//for loop that loops through the array 
for (let index = 0; index < arrayObj.length; index += 1) {

    //the variable 'object' represents each object in the array
    let object = arrayObj[index]

    //the console will log out each property for each object in the array
    console.log(`${object.username}, ${object.email} ${object.password}`)

    //another way to log out the properties of each object in the array
    for (let property in object) {
        console.log(`${property} : ${object[property]}`)
    }
}
//logs the entire array to the console. Used to show what the array looks like BEFORE the submit button is clicked
console.log(arrayObj)

//variable used to get the id of the form button
let formButton = document.getElementById('form_button')

// variable used to get the id of the username input field
let userNameInput = document.getElementById('name_input')

// variable used to get the id of the email input field
let emailInput = document.getElementById('email_input')

// variable used to get the id of the password input field
let passwordInput = document.getElementById('password_input')

// variable used to get the id of the remember me checkbox
let rememberInput = document.getElementById('remember_me');

//event listener on the form button that runs the following function when the submit button is clicked
formButton.addEventListener('click', function (event) {

    //prevents the form from trying to submit the user provided information to a database
    event.preventDefault();

    //variables created to get the information provided by the user from each input field
    //The 'value' keyword is used to represent the information the user types into the field
    let username = userNameInput.value
    let email = emailInput.value
    let password = passwordInput.value

    //'.checked' is the similar to '.value' but for checkboxes. A checkbox's value is a boolean (true/false)
    //if the box is checked then the boolean is true and if it's left unchecked the boolean is false
    let remember = rememberInput.checked

    //the user variable is an object with property keys of username, email, password, and rememberMe
    //we use the variables that represent the value of the input fields, created above, as the value of each property key, listed below.
    //these values are assigned to the appropriate property when the user clicks the submit button
    let user = {
        username: username,
        email: email,
        password: password,
        rememberMe: remember
    }
    
    //finally, after the user provided information is assigned the properties of the user object that object is added, or pushed, to the array of objects.
    arrayObj.push(user)

    //logs the array of objects to the console AFTER all the instructions above are ran by the computer.
    //At this point we should see the array of objects has a new object with properties based off of what the user provided to the form
    console.log(arrayObj)
})