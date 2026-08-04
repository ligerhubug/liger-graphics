function sendOrder(event){

    event.preventDefault();


    let name = document.querySelector(
    ".order-form input[type='text']").value;


    let phone = document.querySelector(
    ".order-form input[type='tel']").value;


    let email = document.querySelector(
    ".order-form input[type='email']").value;


    let service = document.querySelector(
    ".order-form select").value;


    let message = document.querySelector(
    ".order-form textarea").value;



    let whatsappMessage =
    "Hello LIGER Graphics,%0A%0A" +
    "Name: " + name +
    "%0APhone: " + phone +
    "%0AEmail: " + email +
    "%0AService: " + service +
    "%0ADesign Details: " + message;



    window.open(
    "https://wa.me/256YOURNUMBER?text="
    + whatsappMessage,
    "_blank"
    );

}