import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import '../styles/Alert.scss';

const Alert = (props) => {
  const alertMessage = (
    <div className="alert">
      <span className="alert-message">
        { props.alertMessage }
      </span>
      <span className="close-alert" onClick={() => props.setAlertMessage(false) }>
        <span className="cross"></span>
        <span className="cross reverse"></span>
      </span>
    </div>
  );

  return (
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={12} sm={10}>
            { props.alertIsOpen ? alertMessage : <div></div> }
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Alert;
