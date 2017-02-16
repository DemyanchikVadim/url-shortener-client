import React from 'react';
import { connect } from 'react-redux';

class Link extends React.Component {
  
  render() {
    const message = (
      <div className="ui green message"><a href={this.props.link.shortLink}>{this.props.link.shortLink}</a></div>);
    
    const error = (<div></div>);
    
    return (
      <div>
        {this.props.link.shortLink ? message : error}
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
