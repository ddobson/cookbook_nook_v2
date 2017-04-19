import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12} md={6}>
              <form ref="form" className="sign-up-form" onSubmit={ this.handleSubmit }>
                <label>
                  <span>Email: </span>
                  <input ref="email" type="text"/>
                </label>
                <label>
                  <span>Password: </span>
                  <input ref="password" type="text"/>
                </label>
                <label>
                  <span>Password Confirmation: </span>
                  <input ref="passwordConf" type="text"/>
                </label>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SignUp;
