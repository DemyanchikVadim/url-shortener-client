import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkCard({link, deleteLink}) {
  return (
    <div className="card">
      <div className="content">
        <div className="right floated"><b>Count: </b>{link.count}</div>
        <div className="header"><b>Link: </b>{link.url}</div>
        <div className="description"><b>Short Link: </b>{link.shortLink}</div>
        <div className="description"><b>Tags: </b>{link.tags}</div>
      </div>
      <div className="left floated">
        <Link to={`/link/${link._id}`} className="ui primary button">Edit</Link>
        <button className="ui button" onClick={() => deleteLink(link._id)}>Delete</button>
      </div>
    </div>
  );
}

LinkCard.propTypes = {
  link: React.PropTypes.object.isRequired
};
