import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };
  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    let {email, password} = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
