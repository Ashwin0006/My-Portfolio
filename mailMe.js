let mailBtn = document.getElementById("mailMeBtn");
let closeBtn = document.getElementById("closeForm");

let form = document.getElementById("contactForm");



mailBtn.addEventListener("click", () => {
    form.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    form.style.display = "none";
});

// Mailing Logic!
emailjs.init("4yc9Crn_hE-NlBihm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let sender_email = document.getElementById("email").value;
    let message = "Sent by " + sender_email + " : " + document.getElementById("message").value;

    const templateParams = {
        name: name,
        email: "ashcrafts0006@gmail.com",
        message: message
    };

    emailjs.send("service_wvidm5j", "template_uo1lp8s", templateParams)
    .then(
        (res) => console.log("Email Sent!", res),
        (error) => console.log("Error Occured", error)
    );

    form.style.display = "none";
});