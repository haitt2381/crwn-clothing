import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"
import "./sign-in.styles.scss";

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handlerChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handlerSubmit}>
          <FormInput
            name="email"
            handleChange={this.handlerChange}
            type="email"
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            handleChange={this.handlerChange}
            type="password"
            value={this.state.password}
            label="Password"
            required
          />

          <CustomButton type="submit" > Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} > 
           {' '}Sign in with Google{' '} </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn