import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';

import NewRecipeForm from './forms/NewRecipeForm';
import RecipeSwatch from './RecipeSwatch';

import CookbookApiService from '../services/CookbookApiService';

const cbService = new CookbookApiService();

class CookbookContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cookbook: { recipes: [] }
    };

    this.getAndAddCookbookToState = this.getAndAddCookbookToState.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
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

  // Recipes
  createRecipe(data) {
    const id = this.state.cookbook.id;
    return cbService.createRecipe(id, data);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12}>
              <h1>{ this.state.cookbook.title }</h1>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12} sm={6} lg={5}>
              <div className="wrapper">
                <NewRecipeForm
                  createRecipe={ this.createRecipe }
                  getAndAddCookbookToState={ this.getAndAddCookbookToState }
                />
              </div>
            </Col>
            <Col xs={12} sm={6} lg={5}>
              <div className="wrapper">
                {
                  this.state.cookbook.recipes.map((recipe, i) =>
                  <RecipeSwatch
                    key={ `recipe-${i}` }
                    recipe={ recipe }
                  />)
                }
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const CookbookContainerWithRouter = withRouter(CookbookContainer);

export default CookbookContainerWithRouter;
