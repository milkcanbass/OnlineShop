import React, { useState } from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMyShopData } from '../../../redux/myShop/myShop.selectors';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';

const ItemDetailPage = ({ match, myShopData }) => {
  const title = match.params.title;
  const id = match.params.id;
  const itemData = myShopData[title].items[id];
  const { name, description, imageUrl, price } = itemData;
  const [loading, setLoading] = useState({
    loading: true,
  });

  return (
    <div>
      <div className="itemDetailContainer">
        <div className="imgContainer">
          <Spinner className={loading.loading ? 'lds-facebook' : 'noDisplay'} />
          <img
            className={loading.loading ? 'noDisplay' : 'img'}
            src={imageUrl}
            onLoad={() => setLoading({ loading: false })}
            alt="img"
          />
        </div>
        <div className="textContainer">
          <div className="name">{name}</div>
          <div className="price">${price}</div>
          <div className="description">{description}</div>
          <MyButton>Add cart</MyButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopData,
});

export default connect(mapStateToProps)(ItemDetailPage);
