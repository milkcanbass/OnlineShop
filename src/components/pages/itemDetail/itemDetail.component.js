import React from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMyShopData } from '../../../redux/myShop/myShop.selectors';
import MyButton from '../../myButton/myButton.component';

const ItemDetailPage = ({ match, myShopData }) => {
  const title = match.params.title;
  const id = match.params.id;

  const itemData = myShopData[title].items[id];
  const { name, description, imageUrl, price } = itemData;

  return (
    <div className="itemDetailContainer">
      <img className="img" src={imageUrl} />
      <div className="textContainer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
        <div className="description">{description}</div>
        <MyButton>Add cart</MyButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopData,
});

export default connect(mapStateToProps)(ItemDetailPage);
