import React from 'react';

import '../../styles/forms.scss';

class NewCookbookForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.buildFormData();

    // const valid = validations.validateCookbook(formData);

    this.props.createCookbook(formData)
      .then((response) => response.data.cookbook)
      .then((cookbook) => this.props.addCookbookToState(cookbook))
      .then(() => this.refs.form.reset());
  }

  buildFormData() {
    return {
      cookbook: {
        title: this.refs.newCbTitle.value,
        start_page: this.refs.newCbStart.value,
        end_page: this.refs.newCbEnd.value
      }
    };
  }

  render() {
    return (
      <div className="card">
        <h1>Create A Cookbook</h1>
        <form ref="form" onSubmit={ this.handleSubmit }>
          <label>
            <span>Title <span className="req">*</span></span>
            <input ref="newCbTitle" required maxLength={125} type="text"/>
          </label>
          <label>
            <span>Start Page <span className="req">*</span></span>
            <input ref="newCbStart" required min={1} max={1000} step={1} type="number"/>
          </label>
          <label>
            <span>End Page <span className="req">*</span></span>
            <input ref="newCbEnd" required min={1} max={1000} step={1} type="number"/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewCookbookForm;
