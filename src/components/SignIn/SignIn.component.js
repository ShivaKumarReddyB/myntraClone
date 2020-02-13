import React from "react";
import "./SignIn.styles.scss";
import FormInput from "../customInput/formInput.component";
import CustomButton from "../customButton/customButtom.component";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefualt();
    this.setState({ email: "", password: "" });
    console.log("f");
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("fs");
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sigin with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
          />

          <CustomButton type="submit">SignIn </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
