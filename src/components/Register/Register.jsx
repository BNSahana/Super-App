import React, { useState } from "react";
import coverImage from "../../assets/welcome.png";
import styles from "./Register.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // State to store user inputs
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    agreeToTerms: false,
  });

  // State to track form submission
  const [submitted, setSubmitted] = useState(false);

  // State for form errors
  const [formErrors, setFormErrors] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    agreeToTerms: " ",
  });

  // Handle input changes
  const handleFormChanges = (e) => {
    //console.log(name, value)
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));

    // Clear the corresponding error when user interacts with the field
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate form data
  const validateForm = () => {
    let valid = true;
    const newFormErrors = {
      name: "",
      username: "",
      email: "",
      mobile: "",
      agreeToTerms: "",
    };

    // Validate name
    if (!formData.name.trim()) {
      newFormErrors.name = "Field is required";
      valid = false;
    }

    // Validate username
    if (!formData.userName.trim()) {
      newFormErrors.userName = "Field is required";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newFormErrors.email = "Field is required";
      valid = false;
    }

    // Validate mobile
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile)) {
      newFormErrors.mobile = "Field is required";
      valid = false;
    }

    // Validate checkbox (terms agreement)
    if (!formData.agreeToTerms) {
      newFormErrors.agreeToTerms = "Check this box if you want to proceed";
      valid = false;
    }

    setFormErrors(newFormErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (validateForm()) {
      // Save data to localStorage
      localStorage.setItem("Form Data", JSON.stringify(formData));
      navigate("/genre");
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.container}>
      {/* CoverImage section */}
      <div className={styles.coverImage}>
        <div className={styles.text}>
          <h2>Discover new things on Superapp</h2>
        </div>
        <img src={coverImage} alt="Cover Image" />
      </div>

      {/* Form section */}
      <div className={styles.registerform}>
      <Logo/>
        <p>Create your new account</p>
        <div className={styles.formcontainer}>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChanges}
            />
            <div className={styles.error}>{formErrors.name}</div>
            <input
              type="text"
              name="userName"
              id="username"
              placeholder="UserName"
              value={formData.userName}
              onChange={handleFormChanges}
            />
            <div className={styles.error}>{formErrors.userName}</div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChanges}
            />
            <div className={styles.error}>{formErrors.email}</div>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleFormChanges}
            />
            <div className={styles.error}>{formErrors.mobile}</div>

            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="agreeToTerms"
                id="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleFormChanges}
              />
              <label htmlFor="checkbox">
                {" "}
                Share my registration data with Superapp{" "}
                <div className={styles.error}>{formErrors.agreeToTerms}</div>
              </label>
            </div>

            <Button onClick={handleSubmit} />
          </form>

          {/* Footer section */}
          <footer className={styles.footer}>
            <div>
              By clicking on Sign up. You agree to Superapp{" "}
              <span> Terms and Condition of Use </span>
            </div>
            <div>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span> Privacy Policy </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Register;
