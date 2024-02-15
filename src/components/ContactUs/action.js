import emailjs from "@emailjs/browser";

export const sendEmail = (e, refForm, setForm, setLoader) => {
  e.preventDefault();
  // console.log(refForm.current);
  // console.log(refForm);
  setLoader(true);
  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_KEY, // service key
      process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, // template key new
      refForm.current, // select the form to be sent
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY // public key
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
