import React from 'react';
import { connect } from 'react-redux';

class Link extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.link.shortLink}>{this.props.link.shortLink}</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    link: state.link
  };
}

export default connect(mapStateToProps)(Link);
