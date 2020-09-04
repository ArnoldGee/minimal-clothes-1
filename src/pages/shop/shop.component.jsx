import React from 'react';
import {Route} from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> {/*it allows us to access the collectionId parameter inside the match object, depending on what we put after the slash (/) in the route. for example, if we write shop/xarel·lo, the collectionId is the string "xarel·lo", inside match.params.collectionID */}
  </div>
);

export default ShopPage;
