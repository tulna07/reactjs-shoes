import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="card mb-4">
        <img
          className="card-img-top"
          src={product.image}
          alt={`image ${product.id}`}
        />
        <div className="card-body">
          <h6 className="card-title">{product.name}</h6>
          <p className="card-price">{`${product.price} $`}</p>
          <button
            className="btn btn-dark"
            onClick={() => this.props.addProduct(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
