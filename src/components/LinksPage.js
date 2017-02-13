import { connect } from 'react-redux';
import React from 'react';
import LinksList from './LinksList';
import { fetchLinks } from '../actions/AppActions';

class LinksPage extends React.Component {
  componentDidMount() {
    this.props.fetchLinks();
  }
  render() {
    return (
      <div>
        <h1>Links Page</h1>
        <LinksList links={this.props.links}/>
      </div>
    );
  }
}

LinksPage.propTypes = {
  links: React.PropTypes.array.isRequired,
  fetchLinks: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    links: state.links
  };
}

export default connect(mapStateToProps, { fetchLinks })(LinksPage);
