import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ItemCard from '../itemCard/itemCard.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directoryMenu">
    {sections.map(({ id, ...otherProps }) => (
      <ItemCard key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
