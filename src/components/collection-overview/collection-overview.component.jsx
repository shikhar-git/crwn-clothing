import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./../preview-collection/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import "./collection-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollection }) => (
      <CollectionPreview key={id} {...otherCollection} />
    ))}
  </div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
