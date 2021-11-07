function validateForm() {

  const CFORM = document.forms.contactForm;

  let values = {
    name: CFORM.name.value,
    email: CFORM.email.value,
    subject: CFORM.subject.value,
    message: CFORM.contactMsg.value,
    status: true
  };

  if (values.name === null || values.name === "") {
    values.status = false;
    document.getElementById("nameSpan").className = "error";
  } else {
    document.getElementById("nameSpan").className = "";
  }
  if (values.email === null || values.email === "") {
    values.status = false;
    document.getElementById("emailSpan").className = "error";
  } else {
    if (!values.email.includes("@" && ".")) {
      values.status = false;
      document.getElementById("emailSpan").className = "error";
    } else {
      document.getElementById("emailSpan").className = "";
    }
  }
  if (values.message === null || values.message === "") {
    values.status = false;
    document.getElementById("messageSpan").className = "error";
  } else {
    document.getElementById("messageSpan").className = "";
  }

  console.log(values);

  sessionStorage.setItem("name", values.name);
  sessionStorage.setItem("email", values.email);
  sessionStorage.setItem("subject", values.subject);
  sessionStorage.setItem("message", values.message);

  console.log(sessionStorage);

  if(values.status === true) {
      document.getElementById("submit").addEventListener("click", confirmForm(vals));
  }

  return values.status;
} //end of validateForm()

function confirmForm(){
  const para = document.createElement('p');

  let vals = {
    name: sessionStorage.getItem("name"),
    email: sessionStorage.getItem("email"),
    subject: sessionStorage.getItem("subject"),
    message: sessionStorage.getItem("message")
  }

  let fields = {
    name: document.getElementById("nameDiv"),
    email: document.getElementById("emailDiv"),
    subject: document.getElementById("subjectDiv"),
    message: document.getElementById("messageDiv")
  }
  fields.name.innerHTML= "<h5>Name:</h5>" + vals.name;
  fields.email.innerHTML= "<h5>email:</h5>" + vals.email;
  fields.subject.innerHTML= "<h5>subject:</h5>" + vals.subject;
  fields.message.innerHTML= "<h5>message:</h5>" + vals.message;
}

