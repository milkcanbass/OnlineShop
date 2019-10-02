import React, { useState } from 'react';
import './landingMenuItem.styles.scss';
import { withRouter } from 'react-router-dom';
import Spinner from '../spinner/spinner.component';

const LandingMenuItem = ({ item, history }) => {
  const { title, imageUrl, linkUrl } = item;
  const [loading, setLoading] = useState({
    loading: true,
  });

  return (
    <div className="landingMenuItemWrapper" onClick={() => history.push(linkUrl)}>
      {loading.loading ? <Spinner /> : null}
      <img
        className="backgroundImage"
        src={imageUrl}
        onLoad={() => setLoading({ loading: false })}
        alt="backgroundImage"
      />
      {loading.loading ? null : (
        <div className="contentWrapper">
          <h1 className="title">{title.toUpperCase()}</h1>
        </div>
      )}
    </div>
  );
};

export default withRouter(LandingMenuItem);
