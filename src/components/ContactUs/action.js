import emailjs from "@emailjs/browser";

export const sendEmail = (e, refForm, setForm, setLoader) => {
  e.preventDefault();
  // console.log(refForm.current);
  // console.log(refForm);
  setLoader(true);
  emailjs
    .sendForm(
      "service_ti8z5s9", // service key
      "template_wf8uowi", // template key new
      refForm.current, // select the form to be sent
      "1fiMNHDFHzYxPTCIj" // public key
    )
    .then(
      () => {
        setForm({
          name: "",
          message: "",
          email: "",
        })
        alert("Message sent successfully!");
        // window.location.reload(false);
      },
      (err) => {
        console.log(err);
        alert("Failed to send Message, please try again");
      }
    ).finally(() => {
      setLoader(false);
    });
};
