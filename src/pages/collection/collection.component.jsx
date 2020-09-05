import React from 'react';
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
  try {
    const {title, items} = collection;
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.log(err)
    return (
      <Redirect from="/shop" to="/checkout" /> /// has de redirigir a checkout!! Si més tard entens per què es produeix l'error, soluciona'l
    );
  }
};

// ownProps are the props of the CollectionPage component. In this case, we are interested in the "match" prop that comes from react-router

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
