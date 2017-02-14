import React from 'react';
import classnames from 'classnames';

class LinkForm extends React.Component {
  state = {
      link: '',
      tags: '',
      errors: {}
    };
  
  handleChange = (e)=> {
    if (!!this.state.errors[e.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    if (this.state.link === '') errors.link = 'Input is empty';
    if (this.state.tags === '') errors.tags = 'Input is empty';
    this.setState({ errors });
  };
  
  render() {
    return (
      <form className='ui form' onSubmit={this.handleSubmit}>
        <h1>Add new link</h1>
        <div className={classnames('field', { error: !!this.state.errors.link })}>
          <label htmlFor='link'>Link</label>
          <input
            name='link'
            value={this.state.link}
            onChange={this.handleChange}
            id='link' />
          <span>{this.state.errors.link}</span>
        </div>
        
        <div className={classnames('field', {error: !!this.state.errors.tags})}>
          <label htmlFor='tags'>Tags</label>
          <input
            name='tags'
            value={this.state.tags}
            onChange={this.handleChange}
            id='tags' />
          <span>{this.state.errors.tags}</span>
        </div>
        <div className='field'>
          <button className='ui primary button'>Enter</button>
        </div>
      </form>
    );
  }
}

export default LinkForm;
