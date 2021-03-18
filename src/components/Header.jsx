import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HeaderWrapper = styled.div`
  a.cart__icon {
    font-size: 30px;
    position: relative;
  }
  a.cart__icon:hover {
    color: #18bc9c;
  }
  .price {
    position: absolute;
    top: -3px;
    right: -13px;
    display: inline-block;
    color: #000;
    width: 25px;
    height: 20px;
    background-color: #fff;
    font-size: 20px;
    border-radius: 30%;
  }
  span.count {
    font-weight: bolder;
    font-size: 13px;
    position: absolute;
    top: 1px;
    right: 3px;
  }
`;
const Header = ({ cart_count }) => {
  return (
    <HeaderWrapper>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-around">
        <NavLink className="navbar-brand" to="/">
          Shopping App
        </NavLink>
        <NavLink className="cart__icon" to="/cart">
          <i className="fas fa-shopping-cart" title="Cart"></i>
          <div className="price">
            <span className="count">{cart_count}</span>
          </div>
        </NavLink>
      </nav>
    </HeaderWrapper>
  );
};
const mapStateToProps = (state) => ({ cart_count: state.Shop.cart_count });
export default connect(mapStateToProps)(Header);
