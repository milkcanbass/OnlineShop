import React from 'react';
import './landingMenuItem.styles.scss';

const LandingMenuItem = ({ item }) => {
  console.log(item);
  const { title, imageUrl, size } = item;
  return (
    <div className="landingMenuItemWrapper">
      <div className="backgroundImage" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="contentWrapper">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default LandingMenuItem;
