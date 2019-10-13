import React from 'react';
import './myShopOverview.styles.scss';
import PropTypes from 'prop-types';
import MyShopItem from '../myShopItem/myShopItem.component';

const MyShopOverview = ({ title, items }) => (
  <div className="myShopOverviewContainer">
    <div className="title">{title}</div>
    <div className="myShopItemsContainer">
      <div className="myShopItems">
        {items.map((item) => (
          <MyShopItem key={item.id} item={item} title={title} />
        ))}
      </div>
    </div>
  </div>
);

MyShopOverview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default MyShopOverview;
