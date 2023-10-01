import { useState } from "react";
import contactCss from "./Contact.module.css";
function Contact() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [fromErrors, setFormErrors] = useState({});
  const [isSubmit , setIsSubmit]= useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(fromErrors);
    setIsSubmit(true)
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.name) {
      errors.name = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format";
    }
    if (!values.message) {
      errors.message = "Message is required";
    } else if (values.message.length > 100) {
      errors.message = "Message  can only be upto 100 characters";
    }
    return errors;
  };
  return (
    <>
    <div className={contactCss.container}>
         <div className={contactCss.leftSide}>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <div className={contactCss.topic}>Address</div>
          <div className={contactCss.textOne}>Kathmandu, Kathmandu</div>
          <div className={contactCss.textTwo}>Bhaktapur</div>
        </div>
        <div >
          <i className="fas fa-phone-alt"></i>
          <div className={contactCss.topic}>Phone</div>
          <div className={contactCss.textOne}>+0098 9893 5647</div>
          <div className={contactCss.textTwo}>+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className={contactCss.topic}>Email</div>
          <div className={contactCss.textOne}>ghumgham@gmail.com</div>
          <div className={contactCss.textTwo}>info.ghumgham@gmail.com</div>
        </div>
      </div>
  <div className={contactCss.formContainer}>
         {Object.keys(fromErrors).length === 0 && isSubmit ? (
        <div>{alert("Message Sent successfully")}</div>
      ) :""}
        <form className={contactCss.formGroup} onSubmit={handleSubmit}>
          <div className={contactCss.field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p className={contactCss.error}>{fromErrors.name}</p>
          <div className={contactCss.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className={contactCss.error}>{fromErrors.email}</p>
          <div className={contactCss.field}>
            <label>Message</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <p className={contactCss.error}>{fromErrors.message}</p>
          <div className={contactCss.btn}>
            <button type="submit">Message Us</button>
          </div>
        </form>
      </div>
    </div>
    
    </>
  );
}

export default Contact;
