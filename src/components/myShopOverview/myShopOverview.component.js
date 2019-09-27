import React from 'react';
import './myShopOverview.styles.scss';
import MyShopItem from '../myShopItem/myShopItem.component';

const MyShopOverview = ({ title, items }) => {
  return (
    <div className="myShopOverviewContainer">
      <div className="title">{title}</div>
      <div className="myShopItems">
        {items.map(item => (
          <MyShopItem key={item.id} item={item} title={title} />
        ))}
      </div>
    </div>
  );
};

export default MyShopOverview;
