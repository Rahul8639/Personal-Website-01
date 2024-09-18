document.addEventListener("DOMContentLoaded", () => {

    /********************************************FORM FUN() CODE***********************************************/
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        const fname = form.querySelector("#name");
        const subj = form.querySelector("#sub");
        const mail = form.querySelector("#email");
        const mssg = form.querySelector("#message");
        
        function sendEmail() {
            const bodyMessage = `Full Name: ${fname.value}<br> Subject: ${subj.value}<br> Email: ${mail.value}<br> Message: ${mssg.value}<br>`;
            
            Email.send({
                SecureToken : "3f23bbde-6529-4d91-bf4f-6698568ae1a3",
                To : "bio.rahulprasad@gmail.com",
                From : "bio.rahulprasad@gmail.com",
                Subject : "You have a message from your website",
                Body : bodyMessage
            }).then(
                message => {
                    if (message == "OK"){
                        Swal.fire({
                            title: "Message sent!",
                            text: "We will connect soon",
                            icon: "success"
                        });
                    }
                }
            );
        }
        
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            sendEmail();
            form.reset();
            return false;
        });
    });

});