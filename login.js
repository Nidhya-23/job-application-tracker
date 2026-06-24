function login(event){

event.preventDefault();


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



let savedUser =
JSON.parse(localStorage.getItem("user"));



if(savedUser){


if(savedUser.email === email &&
savedUser.password === password){


localStorage.setItem(
"loggedIn",
"true"
);


window.location.href="dashboard.html";


}

else{

alert("Wrong email or password");

}


}

else{

alert("Please signup first");

}


}