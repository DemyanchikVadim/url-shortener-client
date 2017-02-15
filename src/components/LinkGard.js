import React from 'react';

export default function LinkGard ({link}) {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{link.shortLink}</div>
      </div>
    </div>
  );
}

LinkGard.propTypes = {
  link: React.PropTypes.object.isRequired
};