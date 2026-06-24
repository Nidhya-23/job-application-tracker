if(localStorage.getItem("loggedIn")!="true"){

window.location.href="login.html";

}

window.onload = function(){

    let savedProfile = JSON.parse(
        localStorage.getItem("profile")
    );


    if(savedProfile){

        document.getElementById("username").innerText =
        savedProfile.name;


        document.getElementById("role").innerText =
        "Career Goal: " + savedProfile.role;


        document.getElementById("skills").innerText =
        "Skills: " + savedProfile.skills;

    }

}




function editProfile(){


let currentName =
document.getElementById("username").innerText;


let currentRole =
document.getElementById("role")
.innerText.replace("Career Goal: ","");


let currentSkills =
document.getElementById("skills")
.innerText.replace("Skills: ","");



let name = prompt(
"Enter your name:",
currentName
);



let role = prompt(
"Enter your career role:",
currentRole
);



let skills = prompt(
"Enter your skills:",
currentSkills
);



if(name && role && skills){


let profile = {

name:name,
role:role,
skills:skills

};



localStorage.setItem(
"profile",
JSON.stringify(profile)
);



document.getElementById("username")
.innerText=name;



document.getElementById("role")
.innerText=
"Career Goal: "+role;



document.getElementById("skills")
.innerText=
"Skills: "+skills;



alert("Profile updated successfully!");

}


}


function logout(){


localStorage.removeItem("loggedIn");


alert("Logged out");


window.location.href="login.html";

}
