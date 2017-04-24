import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CookbookSwatch.scss';

const CookbookSwatch = (props) => {
  return (
    <div className="card swatch">
      <div className="swatch-img">
        <img src="http://i.imgur.com/4HpnKjz.jpg" alt=""/>
      </div>
      <div className="swatch-content">
        <h2>{ props.cookbook.title }</h2>
        <div className="button-group">
          <Link to={ `/cookbooks/${props.cookbook.id}` } className="btn">Recipes</Link>
          <button
            className="btn btn-inverse"
            onClick={ () => props.destroyCookbook(props.cookbook.id) }>
              Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookbookSwatch;
