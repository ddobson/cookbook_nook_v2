import React from 'react';

import '../../styles/forms.scss';

class EditCookbookForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleCancel(event) {
    event.preventDefault();

    this.props.setCookbookEditStates(false);
  }

  handleSubmit(event) {
    event.preventDefault();

    const id = this.props.cookbookBeingEdited.id;
    const formData = this.buildFormData();

    // const valid = validations.validateCookbook(formData);

    this.props.updateCookbook(id, formData)
      .then((response) => response.data.cookbook)
      .then((cookbook) => this.props.updateCookbookInState(cookbook))
      .then(() => this.props.setCookbookEditStates(false));
  }

  buildFormData() {
    return {
      cookbook: {
        title: this.refs.editCbTitle.value,
        start_page: this.refs.editCbStart.value,
        end_page: this.refs.editCbEnd.value
      }
    };
  }

  render() {
    return (
      <div className="card">
        <h1>Edit Cookbook</h1>
        <form ref="form" onSubmit={ this.handleSubmit } key={ this.props.cookbookBeingEdited.id }>
          <label>
            <span>Title <span className="req">*</span></span>
            <input
              ref="editCbTitle"
              required
              maxLength={125}
              type="text"
              defaultValue={ this.props.cookbookBeingEdited.title }
            />
          </label>
          <label>
            <span>Start Page <span className="req">*</span></span>
            <input
              ref="editCbStart"
              required
              min={1}
              max={1000}
              step={1}
              type="number"
              defaultValue={ this.props.cookbookBeingEdited.start_page }
            />
          </label>
          <label>
            <span>End Page <span className="req">*</span></span>
            <input
              ref="editCbEnd"
              required
              min={1}
              max={1000}
              step={1}
              type="number"
              defaultValue={ this.props.cookbookBeingEdited.end_page }
            />
          </label>
          <div className="form-btn-wrap">
            <button onClick={ this.handleCancel }>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditCookbookForm;
