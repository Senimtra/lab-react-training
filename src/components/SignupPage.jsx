// ############################################
// ##  Iteration 15 - Component: SignupPage  ##
// ############################################

import React from 'react';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: '',
    signupMessage: false,
  };

  handleSignupInputs = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  emailValidation = () => {
    const emailSplit = this.state.email.split(/[@. ]/);
    if (
      (emailSplit.length === 3 ||
        (emailSplit.length === 4 && emailSplit[3] === 'uk')) &&
      this.state.email.indexOf('@') < this.state.email.indexOf('.') &&
      emailSplit[2].length > 1 &&
      emailSplit[2].length < 4 &&
      emailSplit[0].length < 35 &&
      emailSplit[1].length < 35
    ) {
      return 'green';
    } else if (this.state.email.length) {
      return 'red';
    }
  };

  passwordValidation = () => {
    const passwordSplit = this.state.password.split('');
    const passwordNoNumbers = passwordSplit.filter((el) => !/\d/.test(el));
    if (
      passwordSplit.length > 7 &&
      !passwordSplit.includes(' ') &&
      passwordSplit.filter((el) => /\d/.test(el)).length &&
      passwordNoNumbers.filter((el) => el === el.toUpperCase()).length &&
      passwordNoNumbers.filter((el) => el === el.toLowerCase()).length
    ) {
      return 'green';
    } else if (this.state.password.length) {
      return 'red';
    }
  };

  signupMessage = () => {
    const nationality = this.state.nationality;
    if (this.state.signupMessage && this.state.email.length) {
      return (
        (nationality === 'en' &&
          `Hello, your email address is: ${this.state.email}.`) ||
        (nationality === 'de' &&
          `Hallo, deine Email-Adresse lautet: ${this.state.email}.`) ||
        (nationality === 'fr' &&
          `Salut, votre adresse e-mail est: ${this.state.email}.`) ||
        'Not signed up yet.'
      );
    } else {
      return 'Not signed up yet.';
    }
  };

  render() {
    return (
      <div id="signup-page">
        <label htmlFor="input-email">Email</label>
        <input
          className="form-control"
          id="input-email"
          type="text"
          name="email"
          placeholder="Email validation"
          onChange={this.handleSignupInputs}
          style={{
            color: this.emailValidation(),
            borderColor: this.emailValidation(),
          }}
        />
        <label htmlFor="input-password">Password</label>
        <input
          className="form-control"
          id="input-password"
          type="text"
          name="password"
          placeholder="Password validation"
          onChange={this.handleSignupInputs}
          style={{
            color: this.passwordValidation(),
            borderColor: this.passwordValidation(),
          }}
        />
        <label htmlFor="input-nationality">Nationality</label>
        <select
          className="form-select"
          id="input-nationality"
          name="nationality"
          onChange={this.handleSignupInputs}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>
            Where are you from?
          </option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="fr">Francais</option>
        </select>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ signupMessage: true })}
        >
          Sign up
        </button>
        <div id="signup-message">{this.signupMessage()}</div>
      </div>
    );
  }
}

export default SignupPage;
