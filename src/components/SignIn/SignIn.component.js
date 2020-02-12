import React from "react";
import "./SignIn.styles.scss";

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
  };
  render() {
    const { Email, Password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sigin with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input name="Email" type="email" value={Email} />
          <label>Password</label>
          <input name="password" type="password" value={Password} />

          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
