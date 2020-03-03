import React from "react";
import "./SignIn.styles.scss";
import FormInput from "../customInput/formInput.component";
import CustomButton from "../customButton/customButtom.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utli";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("g", this.state.email);
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
          <div className="buttons">
            <CustomButton type="submit">SignIn </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SignInwithGoogle
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
