import React from 'react';

export default function LinkGard({link}) {
  return (
    <div className="card">
      <div className="content">
        <div className="right floated"><b>Count: </b>{link.count}</div>
        <div className="header"><b>Link: </b>{link.url}</div>
        <div className="description"><b>Short Link: </b>{link.shortLink}</div>
        <div className="description"><b>Tags: </b>{link.tags}</div>
      </div>
      <div className="left floated">
        <button className="ui primary button">Edit</button>
        <button className="ui button">Delete</button>
      </div>
    </div>
  );
}

LinkGard.propTypes = {
  link: React.PropTypes.object.isRequired
};

