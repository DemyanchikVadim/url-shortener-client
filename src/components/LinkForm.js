import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveLink } from '../actions/AppActions';
import Link from './Link';

class LinkForm extends React.Component {
  state = {
    link: '',
    tags: '',
    errors: {},
    loading: false
  };
  
  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    if (this.state.link === '') errors.link = 'Input is empty';
    if (this.state.tags === '') errors.tags = 'Input is empty';
    this.setState({errors});
    const isValid = Object.keys(errors).length === 0;
    
    if (isValid) {
      const {link, tags} = this.state;
      this.setState({loading: true});
      this.props.saveLink({link, tags}).then(
        () => {
          this.setState({loading: false})
        },
        (err) => err.response.json().then(({errors}) => this.setState({errors, loading: false}))
      );
    }
  };
  
  render() {
    return (
      <div>
        <form className={classnames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
          <h1>Add new link</h1>
          
          {this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div> }
          
          <div className={classnames('field', {error: !!this.state.errors.link})}>
            <label htmlFor='link'>Link</label>
            <input
              name='link'
              value={this.state.link}
              onChange={this.handleChange}
              id='link'/>
            <span>{this.state.errors.link}</span>
          </div>
          
          <div className={classnames('field', {error: !!this.state.errors.tags})}>
            <label htmlFor='tags'>Tags</label>
            <input
              name='tags'
              value={this.state.tags}
              onChange={this.handleChange}
              id='tags'/>
            <span>{this.state.errors.tags}</span>
          </div>
          <div className='field'>
            <button className='ui primary button'>Enter</button>
          </div>
        </form>
        <Link />
      </div>
    
    
    );
  }
}

export default connect(null, { saveLink })(LinkForm);
