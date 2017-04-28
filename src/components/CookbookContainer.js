import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';

import NewRecipeForm from './forms/NewRecipeForm';
import RecipeSwatch from './RecipeSwatch';

class CookbookContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cookbook: { recipes: [] }
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
                <NewRecipeForm/>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={5}>
              {
                this.state.cookbook.recipes.map((recipe, i) =>
                <RecipeSwatch
                  key={ `recipe-${i}` }
                  recipe={ recipe }
                />)
              }
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const CookbookContainerWithRouter = withRouter(CookbookContainer);

export default CookbookContainerWithRouter;
