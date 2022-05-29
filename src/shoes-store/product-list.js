import React, { Component } from "react";
import ProductItem from "./product-item";

export default class ProductList extends Component {
  renderProductItems = () => {
    const { products } = this.props;
    return products.map(product => (
      <div className="col-4" key={product.id}>
        <ProductItem product={product} addProduct={this.props.addProduct} />
      </div>
    ));
  };

  render() {
    return (
      <div className="product-list">
        <div className="row">{this.renderProductItems()}</div>
      </div>
    );
  }
}
