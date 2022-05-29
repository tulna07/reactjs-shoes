import React, { Component } from "react";
import ProductList from "./product-list";
import shoes from "./data.json";
import Modal from "./modal";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoes,
      cart: [],
    };
  }

  findProductIndex = productId =>
    this.state.cart.findIndex(product => product.id === productId);

  addProduct = product => {
    const cart = [...this.state.cart];

    const idx = this.findProductIndex(product.id);
    // Product exists: idx !== 1

    if (idx !== -1) cart[idx].quantity++;

    if (idx === -1) {
      product.quantity = 1;
      cart.push(product);
    }

    this.setState({ cart });
  };

  deleteProduct = product => {
    const cart = [...this.state.cart];

    const idx = this.findProductIndex(product.id);
    if (idx === -1) return;

    cart.splice(idx, 1);

    this.setState({ cart });
  };

  changeQuantity = (product, sign) => {
    const cart = [...this.state.cart];

    const idx = this.findProductIndex(product.id);
    if (idx === -1) return;

    if (sign === "+") ++cart[idx].quantity;

    if (sign === "-" && cart[idx].quantity > 1) {
      --cart[idx].quantity;
    }

    this.setState({ cart });
  };

  render() {
    const { shoes, cart } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul className="main-nav">
              <li className="active">
                <a className="main-nav__link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="main-nav__link" href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <div className="shoes-shop">
              <button
                className="btn btn-secondary btn-cart"
                data-toggle="modal"
                data-target="#modelId"
              >
                Cart (
                {cart.reduce(
                  (total, product) => (total += product.quantity),
                  0
                )}
                )
              </button>
              <h2 className="text-capitalize text-center mb-4">Shoes Shop</h2>
              <ProductList products={shoes} addProduct={this.addProduct} />
            </div>
          </div>
        </div>
        <Modal
          cart={cart}
          changeQuantity={this.changeQuantity}
          deleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}
