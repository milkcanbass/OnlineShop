import React, { useState } from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';

import { addItem } from '../../../redux/cart/cart.action';

const ItemDetailPage = ({ match, myShopData, addItem }) => {
  const { title } = match.params;
  const { id } = match.params;
  const itemData = myShopData[title].items[id];
  const {
 name, description, imageUrl, price 
} = itemData;
  const [loading, setLoading] = useState({
    loading: true,
  });

  return (
    <div>
      <div className="itemDetailContainer">
        <div className="imgContainer">
          {loading.loading ? <Spinner /> : null}
          <img
            className="img"
            src={imageUrl}
            onLoad={() => setLoading({ loading: false })}
            alt="img"
          />
        </div>
        <div className="textContainer">
          <div className="name">{name}</div>
          <div className="price">
$
{price}
</div>
          <div className="description">{description}</div>
          <MyButton onClick={() => addItem(itemData)}>Add cart</MyButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ItemDetailPage);
