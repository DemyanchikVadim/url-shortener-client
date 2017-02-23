import React from 'react';
import { connect } from 'react-redux';

class Link extends React.Component {
  render() {
    const shortLink = (
      <div className="ui green message">
        <div>
          <h3>
            <a className="long-link" href={this.props.link.url}>
              {this.props.link.url}
            </a>
          </h3>
        </div>
        
        <div>
          <h3>
            <a className="short-link" href={this.props.link.shortLink}>
              {this.props.link.shortLink}
            </a>
          </h3>
        </div>
      </div>);

    return (
      <div>
        {this.props.link.shortLink && shortLink}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    link: state.shortLink
  };
}

export default connect(mapStateToProps)(Link);
