import React from "react";
import "./sign-in-and-sign-up-style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp/>
  </div>
);
export default SignInAndSignUpPage;
