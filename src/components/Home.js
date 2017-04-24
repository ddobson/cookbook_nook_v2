import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import NewCookbookForm from './NewCookbookForm';
import EditCookbookForm from './EditCookbookForm';
import CookbookSwatch from './CookbookSwatch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditingCookbook: false,
      cookbookBeingEdited: {}
    };

    this.setCookbookEditStates = this.setCookbookEditStates.bind(this);
  }

  setCookbookEditStates(isEditingCookbook, cookbook) {
    this.setState({
      isEditingCookbook,
      cookbookBeingEdited: cookbook || {}
    });
  }

  render() {
    const Main = (
      <Row>
        <Col xs={12} sm={6}>
          <section className="wrapper">
            {
              this.state.isEditingCookbook ?
              <EditCookbookForm
                cookbooks={ this.props.cookbooks }
                updateCookbook={ this.props.updateCookbook }
                updateCookbookInState={ this.props.updateCookbookInState }
                cookbookBeingEdited={ this.state.cookbookBeingEdited }
                setCookbookEditStates={ this.setCookbookEditStates }
              /> :
              <NewCookbookForm
                cookbooks={ this.props.cookbooks }
                createCookbook={ this.props.createCookbook }
                addCookbookToState={ this.props.addCookbookToState }
              />
            }
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
                  setCookbookEditStates={ this.setCookbookEditStates }
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
