import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../../redux/shop/shop.selectors';
import CollectionItem from '../../collectionItem/collectionItem.component';

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;

  return (
    <div className="collectionContainer">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
