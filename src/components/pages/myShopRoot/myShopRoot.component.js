import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MyShopPage from '../myShop/myShop.component';
import ItemDetailPage from '../itemDetail/itemDetail.component';
import { firestore, convertDataSnapshotToMap } from '../../../firebase/firebase.utils';
import { updateShopData } from '../../../redux/myShop/myShop.actions';
import { selectMyShopData } from '../../../redux/myShop/myShop.selectors';

class MyShopRoot extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopData } = this.props;
    const myShopDataRef = firestore.collection('myShopData');
    myShopDataRef.onSnapshot(async snapshot => {
      const dataMap = convertDataSnapshotToMap(snapshot);
      updateShopData(dataMap);
    });
  }

  render() {
    const { match, myShopData } = this.props;
    return (
      <div className="myShopRoot">
        <Route
          exact
          path={`${match.path}`}
          render={props => <MyShopPage {...props} myShopData={myShopData} />}
        />
        <Route
          path={`${match.path}/:title/:id`}
          render={props => <ItemDetailPage {...props} myShopData={myShopData} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateShopData: dataMap => dispatch(updateShopData(dataMap)),
});

const mapStateToProps = createStructuredSelector({
  myShopData: selectMyShopData,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyShopRoot);
