import React from 'react';
import { connect } from 'react-redux';

class Link extends React.Component {
  
  render() {
    const message = (
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
    
    const error = ( <div>
    
    </div> );
    
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
