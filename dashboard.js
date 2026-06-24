if(localStorage.getItem("loggedIn")!="true"){

window.location.href="login.html";

}
let applications =
JSON.parse(localStorage.getItem("applications")) || [];




let total =
applications.length;


let applied =
applications.filter(a =>
a.status?.toLowerCase()=="applied"
).length;



let interview =
applications.filter(a =>
a.status?.toLowerCase()=="interview"
).length;




let selected =
applications.filter(a =>
a.status?.toLowerCase()=="selected"
).length;




document.getElementById("total").innerHTML=total;

document.getElementById("applied").innerHTML=applied;

document.getElementById("interview").innerHTML=interview;

document.getElementById("selected").innerHTML=selected;







// Recent Applications


let recent =
document.getElementById("recent");


if(applications.length==0){


recent.innerHTML=
`
<p>
No applications yet 🚀
</p>
`;

}

else{


applications
.slice(-5)
.reverse()
.forEach(app=>{


recent.innerHTML +=


`

<div class="application">

<div>

<h3>${app.company}</h3>

<p>
${app.role}
</p>

</div>


<span class="status">
${app.status}
</span>


</div>


`;



});


}


let rate=0;


if(total>0){

rate =
Math.round((selected/total)*100);

}



document.getElementById("bar")
.style.width =
rate+"%";



document.getElementById("percentage")
.innerHTML =
rate+"% Success Rate";
function logout(){


localStorage.removeItem("loggedIn");


alert("Logged out");


window.location.href="login.html";

}