import React, { useState } from "react";
import Footer from "./Footer";
import "./css/contact.css";
import "../App.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

/*
<span className="icon is-small is-left">
  <i className="fas fa-envelope"></i>
</span>
<span className="icon is-small is-right">
  <i className="fas fa-exclamation-triangle"></i>
</span>
*/
let errorMessage;
//This email is invalid
function Contact(props) {
  //const [name, setName] = useState("");
  //const [userEmail, setUserEmail] = useState("");
  //const [subject, setSubject] = useState("");
  //const [message, setMessage] = useState("");

  const initialState = {
    name: "",
    userEmail: "",
    subject: "",
    message: "",
  };

  const [contactFormState, setContactFormState] = useState(initialState);
  const { username, email, subject, message } = contactFormState;
  let history = useHistory();

  const handleChange = (e) => {
    setContactFormState({ [e.target.name]: e.target.value });
  };

  //axios.post("http://localhost:4000/register")

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      name: contactFormState.name,
      userEmail: contactFormState.userEmail,
      subject: contactFormState.subject,
      message: contactFormState.message,
    };

    axios
      .post("http://localhost:4000/contact", info)
      .then((res) => {
        history.push("/confirmation");
      })
      .catch((err) => console.log(err));
  };

  //onSubmit={handleSubmit}

  return (
    <>
      <section id="contact">
        <div className="contact-heading has-text-weight-semibold is-size-3 has-text-centered">
          <h2>Contact</h2>
        </div>

        <form
          action="/contact"
          method="post"
          role="form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Name"
                value={contactFormState.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                name="userEmail"
                className="input"
                type="email"
                placeholder="Email"
                value={contactFormState.userEmail}
                onChange={handleChange}
              />
            </div>
            <p className="help is-danger">{errorMessage}</p>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div
                name="subject"
                className="select"
                value={contactFormState.subject}
                onChange={handleChange}
              >
                <select>
                  <option>Report an issue</option>
                  <option>Provide Feedback</option>
                  <option>Ask a question</option>
                  <option>Submit an Idea</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                name="subject"
                className="textarea"
                placeholder="Detailed Message..."
                value={contactFormState.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button primary-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
