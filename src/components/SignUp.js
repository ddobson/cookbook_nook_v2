import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import '../styles/forms.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.buildFormData();

    this.props.handleSignUp('sign-up', data);
  }

  buildFormData() {
    return {
      credentials: {
        email: this.refs.email.value,
        password: this.refs.password.value,
        password_confirmation: this.refs.passwordConf.value
      }
    };
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12} sm={8} md={4} className="form-wrap">
              <h1>Sign Up for an Account</h1>
              <form ref="form" id="sign-up-form" className="form" onSubmit={ this.handleSubmit }>
                <label>
                  <span>Email <span className="req">*</span></span>
                  <input ref="email" required type="email"/>
                </label>
                <label>
                  <span>Password <span className="req">*</span></span>
                  <input ref="password" required type="password"/>
                </label>
                <label>
                  <span>Password Confirmation <span className="req">*</span></span>
                  <input ref="passwordConf" required type="password"/>
                </label>
                <button type="submit">Submit</button>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SignUp;
