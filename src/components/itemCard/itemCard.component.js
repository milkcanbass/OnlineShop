import React from 'react';
import './itemCard.styles.scss';
import { withRouter } from 'react-router-dom';

const ItemCard = props => {
  console.log(props);
  const { title, imageUrl, size, history, match } = props;
  return (
    <div className={`${size} itemCardWrapper`} onClick={() => history.push(`${match.url}${title}`)}>
      <div className="backgroundImage" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(ItemCard);
