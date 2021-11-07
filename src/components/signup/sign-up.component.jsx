import React,{useState} from "react";
import { connect } from "react-redux";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import { signUpStart } from "./../../redux/user/user.action";
import {
  auth,
  createUserProfileDocument,
} from "./../../firebase/firebase.util";
import "./sign-up.style.scss";
import { render } from "@testing-library/react";

const SignUp =({signUpStart})=> {
  const {signUpCredentials,setSignUpCedentials} =useState({ displayName: "",
  email: "",
  password: "",
  confirmPassowrd: "",})

  const { displayName, email, password, confirmPassowrd } = signUpCredentials;
 const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassowrd) {
      alert("Password doesn't match.");
      return;
    }

    signUpStart({ displayName, email, password });
  };
 const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpCedentials({...signUpCredentials, [name]: value });
  };

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email account</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassowrd"
            value={confirmPassowrd}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
