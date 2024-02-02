import React, { useRef, useContext, useState } from "react";
import { CircularProgress, InputLabel, TextField } from "@mui/material";
import "./contactUs.scss";
import { sendEmail } from "./action";
import { Height } from "@mui/icons-material";

export default function ContactUs(params) {
  const refForm = useRef();
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [error, setError] = useState({});
  const [loader, setLoader] = useState(false);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const hadlesubmit = (e) => {
    e.preventDefault();
    setError({});
    if (
      form.name === "" ||
      form.message === "" ||
      form.email === "" ||
      !isValidEmail(form.email)
    ) {
      console.log("error");
      let err = {};
      if (form.email === "") err.email = true;
      if (!isValidEmail(form.email)) err.email = true;
      if (form.name === "") err.name = true;
      if (form.message === "") err.message = true;
      setError(err);
      return;
    } else {
      // console.log(isValidEmail(form.email));
      sendEmail(e, refForm, setForm, setLoader);
    }
  };

  return (
    <div className="contactUs" id="contactus" name="contactus">
      <div className="wrapper">
        <div className="left">
          {/* <p>
            We are always <span className="color">happy</span> to hear from you,
            and we value your <span className="color">feedback</span> and
            suggestions. If you have any questions or concerns, please don't
            hesitate to reach out to us.
          </p> */}
          {/* <div> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1375.2744253363237!2d38.780887106178525!3d8.991944670966282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1706858494369!5m2!1sen!2set"
            // width="100%"
            // height="100%"
            className="map"
            style={{ border: "0" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* </div> */}
        </div>
        <div className="right">
          <h3>
            Contact <span className="color">us</span>
          </h3>
          <form ref={refForm} onSubmit={hadlesubmit}>
            {/* <InputLabel>{"Your name"}</InputLabel> */}
            <TextField
              type="text"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              placeholder="Your Name"
              value={form.name}
              error={error.name}
              name="name"
              id="name"
            />
            <TextField
              type="text"
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              placeholder="Your Email"
              value={form.email}
              error={error.email}
              name="email"
              id="email"
            />
            <TextField
              name="message"
              id="message"
              placeholder="Message"
              // cols="30"
              multiline
              rows="3"
              value={form.message}
              error={error.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
              }}
            ></TextField>
            {loader ? (
              <button style={{ height: "40px" }}>
                {" "}
                <CircularProgress />{" "}
              </button>
            ) : (
              <button type="submit">send</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
