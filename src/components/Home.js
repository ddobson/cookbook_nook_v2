import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import NewCookbookForm from './forms/NewCookbookForm';
import EditCookbookForm from './forms/EditCookbookForm';
import CookbookSwatch from './CookbookSwatch';

import CookbookApiService from '../services/CookbookApiService';

const cbService = new CookbookApiService();

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cookbooks: [],
      isEditingCookbook: false,
      cookbookBeingEdited: {}
    };

    this.setCookbookEditStates = this.setCookbookEditStates.bind(this);
    this.createCookbook = this.createCookbook.bind(this);
    this.updateCookbook = this.updateCookbook.bind(this);
    this.destroyCookbook = this.destroyCookbook.bind(this);
    this.addCookbookToState = this.addCookbookToState.bind(this);
    this.updateCookbookInState = this.updateCookbookInState.bind(this);
    this.removeCookbookFromState = this.removeCookbookFromState.bind(this);
  }

  componentDidMount() {
    cbService.getCookbooks()
      .then((response) => this.setState({ cookbooks: response.data.cookbooks }));
  }

  setCookbookEditStates(isEditingCookbook, cookbook) {
    this.setState({
      isEditingCookbook,
      cookbookBeingEdited: cookbook || {}
    });
  }

  // Cookbooks
  createCookbook(data) {
    return cbService.createCookbook(data);
  }

  updateCookbook(id, data) {
    return cbService.updateCookbook(id, data);
  }

  destroyCookbook(id) {
    cbService.destroyCookbook(id)
      .then(() => this.removeCookbookFromState(id));
  }

  addCookbookToState(cookbook) {
    const cookbooks = this.state.cookbooks.slice();
    cookbooks.push(cookbook);
    this.setState({ cookbooks });
  }

  updateCookbookInState(cookbook) {
    const cookbooks = this.state.cookbooks.slice();
    const targetIndex = cookbooks.findIndex((ogCookbook) => ogCookbook.id === cookbook.id);
    for (const key in cookbooks[targetIndex]) {
      if (key === 'id') {
        continue;
      }

      cookbooks[targetIndex][key] = cookbook[key];
    }
    this.setState({ cookbooks });
  }

  removeCookbookFromState(id) {
    const cookbooks = this.state.cookbooks.slice().filter((cookbook) => cookbook.id !== id);
    this.setState({ cookbooks });
  }

  render() {
    const Main = (
      <Row>
        <Col col={12}>
          <Row center="xs">
            <Col xs={12} sm={6} lg={5}>
              <section className="wrapper">
                {
                  this.state.isEditingCookbook ?
                  <EditCookbookForm
                    cookbooks={ this.state.cookbooks }
                    updateCookbook={ this.updateCookbook }
                    updateCookbookInState={ this.updateCookbookInState }
                    cookbookBeingEdited={ this.state.cookbookBeingEdited }
                    setCookbookEditStates={ this.setCookbookEditStates }
                  /> :
                  <NewCookbookForm
                    cookbooks={ this.state.cookbooks }
                    createCookbook={ this.createCookbook }
                    addCookbookToState={ this.addCookbookToState }
                  />
                }
              </section>
            </Col>
            <Col xs={12} sm={6} lg={5}>
              <section className="wrapper">
                {
                  this.state.cookbooks.map((cookbook, i) =>
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
