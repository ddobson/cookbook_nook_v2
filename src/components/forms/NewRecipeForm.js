import React from 'react';

import '../../styles/forms.scss';

class NewRecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // const formData = this.buildFormData();

  }

  buildFormData() {
    return {
      recipe: {
        title: this.refs.newRecipeTitle.value,
        start_page: this.refs.newRecipeStart.value,
        end_page: this.refs.newRecipeEnd.value
      }
    };
  }

  render() {
    return (
      <div className="card">
        <h1>Create A Recipe</h1>
        <form ref="form" onSubmit={ this.handleSubmit }>
          <label>
            <span>Name <span className="req">*</span></span>
            <input ref="newRecipeTitle" required maxLength={125} type="text"/>
          </label>
          <label>
            <span>Start Page <span className="req">*</span></span>
            <input ref="newRecipeStart" required min={1} max={1000} step={1} type="number"/>
          </label>
          <label>
            <span>End Page <span className="req">*</span></span>
            <input ref="newRecipeEnd" required min={1} max={1000} step={1} type="number"/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewRecipeForm;
