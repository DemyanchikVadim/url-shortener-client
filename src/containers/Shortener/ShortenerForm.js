import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveLink, fetchLink, updateLink } from '../../actions/AppActions';
import ShortLink from './ShortLink';
import validateInput from '../../validations/linkform';

class LinkForm extends React.Component {
  state = {
    _id: this.props.link ? this.props.link._id : null,
    link: this.props.link ? this.props.link.url : '',
    tags: this.props.link ? this.props.link.tags : '',
    errors: {},
    loading: false
  };
  
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      _id: nextProps.link._id,
      link: nextProps.link.url,
      tags: nextProps.link.tags
    })
  };
  
  componentDidMount = () => {
    const { match } = this.props;
    if (match.params._id) {
      this.props.fetchLink(match.params._id);
    }
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

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.isValid()) {
      const { _id, link, tags} = this.state;
      this.setState({loading: true});
      if (_id) {
        this.props.updateLink({ _id, link, tags })
          .then(
          () => {
            this.setState({loading: false})
          })
          .catch(
          (err) => {
            this.setState({ errors: err.response.data.errors, loading: false })
          });
      } else {
        this.props.saveLink({link, tags})
          .then(
          () => {
            this.setState({link: '', tags: '', loading: false})
          })
          .catch(
          (err) => {
            this.setState({ errors: err.response.data.errors, loading: false })
          });
      }
    }
  };
  
  render() {
    return (
      <div className="container">
        <h1 className="form-header">Url-shortener</h1>
        <div className="shorten-url-wrapper">
         <div className="shorten-url">
          <form className={classnames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
            
            {this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div> }
            
            <div className={classnames('field', {error: !!this.state.errors.link})}>
              <label htmlFor='link'>Link</label>
              <input
                name='link'
                placeholder="Paste a link to short it"
                value={this.state.link}
                onChange={this.handleChange}
                id='link'/>
              <span>{this.state.errors.link}</span>
            </div>
            
            <div className={classnames('field', {error: !!this.state.errors.tags})}>
              <label htmlFor='tags'>Tags</label>
              <input
                name='tags'
                placeholder="Paste tags"
                value={this.state.tags}
                onChange={this.handleChange}
                id='tags'/>
              <span>{this.state.errors.tags}</span>
            </div>
            <div className='field'>
              <button className='ui primary button'>Enter</button>
            </div>
          </form>
         </div>
        </div>
        <div className="shortened-link-wrapper">
          <ShortLink />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if(match.params._id) {
    return {
      link: state.links.find(item => item._id === match.params._id)
    }
  }
  return { link: null }
}

export default connect(mapStateToProps, { saveLink, fetchLink, updateLink })(LinkForm);
