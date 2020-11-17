import React from "react";
import CollectionItem from "../collectionitem/collectionitem";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
  // console.log(items);
  const renderPreview = () => {
    return items
      .filter((items, idx) => idx < 4)
      .map((item) => <CollectionItem key={item.id} items={item} />);
  };

  return (
    <>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">{renderPreview()}</div>
      </div>
    </>
  );
};

export default CollectionPreview;
