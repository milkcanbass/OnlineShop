import React, { useState } from 'react';
import './landingMenuItem.styles.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner.component';

const LandingMenuItem = ({ item: { title, imageUrl, linkUrl }, history }) => {
  const [loading, setLoading] = useState({
    loading: true,
  });

  return (
    <div role="button" className="landingMenuItemWrapper" onClick={() => history.push(linkUrl)}>
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

LandingMenuItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  history: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
};

export default withRouter(LandingMenuItem);
