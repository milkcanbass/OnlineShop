import React from 'react';
import './landingMenuItem.styles.scss';
import { withRouter } from 'react-router-dom';

const LandingMenuItem = ({ item, history }) => {
  console.log(history);
  const { title, imageUrl, linkUrl } = item;

  return (
    <div className="landingMenuItemWrapper" onClick={() => history.push(linkUrl)}>
      <div className="backgroundImage" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="contentWrapper">
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default withRouter(LandingMenuItem);
