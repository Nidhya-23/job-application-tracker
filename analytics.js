if(localStorage.getItem("loggedIn")!="true"){

window.location.href="login.html";

}
let applications =
JSON.parse(localStorage.getItem("applications")) || [];



let total = applications.length;



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



let rejected =
applications.filter(a =>
a.status?.toLowerCase()=="rejected"
).length;



document.getElementById("total").innerHTML=total;


document.getElementById("rejected").innerHTML=rejected;



let interviewRate =
total ? Math.round(interview/total*100):0;


let selectionRate =
total ? Math.round(selected/total*100):0;



document.getElementById("interviewRate")
.innerHTML=interviewRate+"%";



document.getElementById("selectionRate")
.innerHTML=selectionRate+"%";






function percent(value){

return total ? (value/total)*100 :0;

}



document.getElementById("applyBar")
.style.width=percent(applied)+"%";



document.getElementById("interviewBar")
.style.width=percent(interview)+"%";



document.getElementById("selectedBar")
.style.width=percent(selected)+"%";



document.getElementById("rejectBar")
.style.width=percent(rejected)+"%";

let canvas = document.createElement("canvas");

document.querySelector(".insight")
.prepend(canvas);



new Chart(canvas,{

type:"pie",

data:{

labels:[
"Applied",
"Interview",
"Selected",
"Rejected"
],

datasets:[{

data:[
applied,
interview,
selected,
rejected
]


}]


},


options:{


responsive:true,


plugins:{


legend:{

position:"bottom"

}


}


}


});



let message =
document.getElementById("message");



if(applications.length==0){


message.innerHTML=
"No applications tracked yet 🚀";


}

else{


let output="";


applications
.slice(-5)
.reverse()
.forEach(app=>{


let days="Unknown";


if(app.date){


let created =
new Date(app.date);


let today =
new Date();



let diff =
today-created;


days =
Math.floor(
diff/(1000*60*60*24)
);


}



output +=
`
<p>
💼 ${app.company}
<br>

Status:
<b>${app.status}</b>

<br>

⏳ ${days} days in tracking

</p>

`;



});


message.innerHTML=output;


}


function logout(){


localStorage.removeItem("loggedIn");


alert("Logged out");


window.location.href="login.html";

}