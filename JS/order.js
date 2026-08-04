document.getElementById("orderForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

let email=document.getElementById("email").value;

let service=document.getElementById("service").value;

let details=document.getElementById("details").value;

let date=document.getElementById("date").value;

let message=
`NEW DESIGN ORDER

Name: ${name}

Phone: ${phone}

Email: ${email}

Service: ${service}

Delivery Date: ${date}

Project Details:

${details}`;

let whatsapp="https://wa.me/256703354523?text="+encodeURIComponent(message);

window.open(whatsapp,"_blank");

});