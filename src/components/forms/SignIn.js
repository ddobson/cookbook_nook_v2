import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';

import '../../styles/forms.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.buildFormData();
    const errorMsg = 'Uh oh! Something went wrong. Please check your credentials and try again.';

    this.props.handleAuthAction('sign-in', data)
      .then((response) => this.props.saveUserInfo(response.data))
      .then(() => this.refs.form.reset())
      .then(() => {
        if (this.props.alertIsOpen) {
          this.props.setAlertMessage(false);
        }
        this.refs.form.reset();
      })
      .then(() => this.props.history.push('/'))
      .catch(() => this.props.setAlertMessage(true, errorMsg));
  }

  buildFormData() {
    return {
      credentials: {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
    };
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12} sm={8} md={4} className="form-wrap">
              <h1>Sign In to Your Account</h1>
              <form ref="form" id="sign-up-form" className="form" onSubmit={ this.handleSubmit }>
                <label>
                  <span>Email <span className="req">*</span></span>
                  <input ref="email" required type="email"/>
                </label>
                <label>
                  <span>Password <span className="req">*</span></span>
                  <input ref="password" required type="password"/>
                </label>
                <button type="submit">Submit</button>
              </form>
              <Link to="sign-up">Not a member? Sign-Up!</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const SignInWithRouter = withRouter(SignIn);

export default SignInWithRouter;
