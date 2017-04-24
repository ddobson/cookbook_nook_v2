import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import NewCookbookForm from './NewCookbookForm';
import CookbookSwatch from './CookbookSwatch';

class Home extends Component {
  render() {
    const Main = (
      <Row>
        <Col xs={12} sm={6}>
          <section className="wrapper">
            <NewCookbookForm
              cookbooks={ this.props.cookbooks }
              createCookbook={ this.props.createCookbook }
              addCookbookToState={ this.props.addCookbookToState }
            />
          </section>
        </Col>
        <Col xs={12} sm={6}>
          <section className="wrapper">
            {
              this.props.cookbooks.map((cookbook, i) =>
                <CookbookSwatch
                  key={ `cb-${i}` }
                  cookbook={ cookbook }
                  destroyCookbook={ this.props.destroyCookbook }
                />)
            }
          </section>
        </Col>
      </Row>
    );

    if (this.props.isLoggedIn) {
      return Main;
    } else {
      return <div>HOME</div>;
    }
  }
}

export default Home;
