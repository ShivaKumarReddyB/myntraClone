import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import { loadShopData } from "../../redux/shopData/ShopData.action";

import "./CollectionOverview.scss";

function CollectionOverview(props) {
  useEffect(() => {
    props.getshopData();
  }, [props]);

  return (
    <div className="collection-overview">
      <h1 className="title">Collections</h1>
      {props.shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shopData: state.shop.shopData,
});

const mapDispatchToProps = {
  getshopData: loadShopData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);
