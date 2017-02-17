import React from 'react';
import LinkGard from './LinkGard';

export default function LinksList({ links }) {
  const emptyMessage = (
    <p>There is no links yet</p>
  );
  
  const linksList = (
    <div className="ui one cards">
      {links.map(link => <LinkGard link={link} key={link._id} />)}
    </div>
  );
  
  return (
    <div>
      {links.length === 0 ? emptyMessage : linksList}
    </div>
  );
}

LinksList.propTypes = {
  links: React.PropTypes.array.isRequired
};
