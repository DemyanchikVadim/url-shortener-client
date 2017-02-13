import React from 'react';

export default function LinksList({ links }) {
  const emptyMessage = (
    <p>There is no links yet</p>
  );
  
  const linksList = (
    <p>linksList</p>
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
