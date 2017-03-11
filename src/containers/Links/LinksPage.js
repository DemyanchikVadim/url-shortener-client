import { connect } from 'react-redux';
import React from 'react';
import LinksList from '../../components/Links/LinksList';
import { fetchLinks, deleteLink } from '../../actions/AppActions';

class LinksPage extends React.Component {
  componentDidMount() {
    this.props.fetchLinks();
  }
  render() {
    return (
      <div className="container">
        <LinksList links={this.props.links} deleteLink={this.props.deleteLink}/>
      </div>
    );
  }
}

LinksPage.propTypes = {
  links: React.PropTypes.array.isRequired,
  fetchLinks: React.PropTypes.func.isRequired,
  deleteLink: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    links: state.links
  };
}

export default connect(mapStateToProps, { fetchLinks, deleteLink })(LinksPage);
