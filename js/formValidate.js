function validateForm() {
    let status = true;
    const CFORM = document.forms.contactForm;
    let values = {
    name: CFORM.name.value,
    email: CFORM.email.value,
    subject: CFORM.subject.value,
    message: CFORM.contactMsg.value
    }

    if (values.name===null || values.name==="") {
        status = false;
        document.getElementById("nameSpan").className = "error";
    } else {
        document.getElementById("nameSpan").className = "";
    }
    if (values.email===null || values.email==="") {
        status = false;
        document.getElementById("emailSpan").className = "error";
    } else {
        if (! x.includes("@")) {
            status = false;
            document.getElementById("emailSpan").className = "error";
        } else {
            document.getElementById("emailSpan").className = "";
        }
    }
    if (values.message===null || values.message==="") {
        status = false;
        document.getElementById("messageSpan").className = "error";
    } else {
        document.getElementById("messageSpan").className = "";
    }

    return status
} //end of validateForm()