import { connect } from 'react-redux';
import React from 'react';
import LinksList from './LinksList';

class LinksPage extends React.Component {
  componentDidMount() {

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
  links: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    links: state.links
  };
}

export default connect(mapStateToProps)(LinksPage);
