import React from 'react';

import { Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';

import '../../styles/forms.scss';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.buildFormData();
    const errorMsg = 'Uh oh! Something went wrong. Please try again.';

    this.props.handleAuthAction('change-pw', data)
      .then(() => this.refs.form.reset())
      .then(() => {
        if (this.props.alertIsOpen) {
          this.props.setAlertMessage(false);
        }
        this.refs.form.reset();
      })
      .catch(() => this.props.setAlertMessage(true, errorMsg));
  }

  buildFormData() {
    return {
      passwords: {
        old: this.refs.oldPassword.value,
        new: this.refs.newPassword.value
      }
    };
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12} sm={8} md={4} className="form-wrap">
              <h1>Change Your Password</h1>
              <form ref="form" id="sign-up-form" className="form" onSubmit={ this.handleSubmit }>
                <label>
                  <span>Old Password <span className="req">*</span></span>
                  <input ref="oldPassword" required type="password"/>
                </label>
                <label>
                  <span>New Password <span className="req">*</span></span>
                  <input ref="newPassword" required type="password"/>
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

const ChangePasswordWithRouter = withRouter(ChangePassword);

export default ChangePasswordWithRouter;
