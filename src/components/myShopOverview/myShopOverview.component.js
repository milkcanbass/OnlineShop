import React, { useEffect } from 'react';
import './myShopOverview.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import MyShopItem from '../myShopItem/myShopItem.component';
import { selectDropdownOpen } from '../../redux/cart/cart.selectors';
import { closeDropdown } from '../../redux/cart/cart.action';

const MyShopOverview = ({
  title, items, dropdownOpen, closeDropdown,
}) => {
  useEffect(() => {
    if (dropdownOpen) {
      closeDropdown();
    }
  }, []);
  return (
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
};

MyShopOverview.defaultProps = {
  title: '',
  items: [],
};

MyShopOverview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  dropdownOpen: PropTypes.bool.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  closeDropdown: () => dispatch(closeDropdown()),
});

const mapStateToProps = createStructuredSelector({
  dropdownOpen: selectDropdownOpen,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyShopOverview);
