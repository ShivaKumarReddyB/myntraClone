import React from "react";

// import SHOP_DATA from "./shop.data";
import {connect} from "react-redux"
import CollectionPreview from "../../components/collection-preview/collection-preview";
import {loadShopData} from "../../redux/shopData/ShopData.action";

class ShopPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this.state = {
  //   //   collections: [],
  //   // };
  // }

componentDidMount() {
    this.props.getshopData()
    // this.setState({collection:this.props.shopData})
}

  render() {
    // console.log(this.props.shopData ,"----")
    const collections  = this.props.shopData
    return (
      <div className="shop=page">
        <h1 className="title">Collections</h1>

        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  shopData:state.shop.shopData

})

const mapDispatchToProps={
  getshopData:loadShopData
}


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
