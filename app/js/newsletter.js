function getNewsletter() {

    const form = document.querySelector('.newsletter-input-part');

    form.addEventListener('submit', validateMail);

    function saveToDatabase(mail) {

        let newMailRef = mailsRef.push();
        newMailRef.set({
            email: mail
        });
    }

    function validateMail() {

        event.preventDefault();

        let inputField = document.querySelector('.newsletter-input');
        const mailValue = inputField.value;
        const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

        let isProper = reg.test(mailValue);

        if (isProper) {
            let trimMailValue = mailValue.trim();
            saveToDatabase(trimMailValue);

        } else {
            alert('Your e-mail address is incorrect.');
        }

        form.reset();
    }
}

getNewsletter();

