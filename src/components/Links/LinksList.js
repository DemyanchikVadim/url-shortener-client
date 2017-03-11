import React from 'react';
import LinkGard from './LinkCard';

export default function LinksList({ links, deleteLink }) {
  const emptyMessage = (
    <p>There is no links yet</p>
  );
  
  const linksList = (
    <div className="ui one cards">
      { links.map(link => <LinkGard link={link} key={link._id} deleteLink={deleteLink}/>) }
    </div>
  );
  
  return (
    <div>
      { links.length === 0 ? emptyMessage : linksList }
    </div>
  );
}

LinksList.propTypes = {
  links: React.PropTypes.array.isRequired,
  deleteLink: React.PropTypes.func.isRequired
};
