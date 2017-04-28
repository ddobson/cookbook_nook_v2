import React from 'react';

import '../styles/swatch.scss';

const RecipeSwatch = (props) => {
  return (
    <div className="card swatch">
      <div className="swatch-img">
        <img src="http://i.imgur.com/4HpnKjz.jpg" alt=""/>
      </div>
      <div className="swatch-content">
        <h2>{ props.recipe.title }</h2>
        <div className="button-group">
          <button
            className="btn btn-inverse"
            onClick={ () => console.log('delete clicked') }>
              Delete
          </button>
          <button
            className="btn"
            onClick={ () => console.log('edit clicked') }>
              Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeSwatch;
