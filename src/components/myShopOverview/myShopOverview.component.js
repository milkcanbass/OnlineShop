import React from 'react';
import './myShopOverview.styles.scss';
import MyShopItem from '../myShopItem/myShopItem.component';

const MyShopOverview = props => {
  console.log(props);
  return (
    <div className="myShopOverviewContainer">
      <div className="title">{props.title}</div>
      <div className="myShopItems">
        {props.items.map(item => (
          <MyShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyShopOverview;
