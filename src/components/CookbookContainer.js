import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';

class CookbookContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cookbook: {}
    };

    this.getAndAddCookbookToState = this.getAndAddCookbookToState.bind(this);
  }

  componentDidMount() {
    this.getAndAddCookbookToState();
  }

  getAndAddCookbookToState() {
    const id = this.props.match.params.id;
    this.props.getCookbook(id)
      .then((response) => response.data.cookbook)
      .then((cookbook) => this.setState({ cookbook }));
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12} sm={6} lg={5}>
              <div className="wrapper">
              </div>
            </Col>
            <Col xs={12} sm={6} lg={5}>

            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default CookbookContainer;
const CookbookContainerWithRouter = withRouter(CookbookContainer);

export default CookbookContainerWithRouter;
