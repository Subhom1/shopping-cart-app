import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  REMOVE_COUNT,
} from "../redux/action/shoppingAction";
import { CommonLayout } from "./index";
import styled from "styled-components";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  .custom__row {
    text-align: center;
    margin: 50px;
  }
  .list {
    margin: 10px 30% 0 0;
    background: #cfdeea;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list h6 {
    font-weight: bold;
  }
  h4.heading {
    font-weight: bolder;
  }
  .count__wrapper i {
    margin: 0 15px;
  }
  .icon {
    cursor: pointer;
  }
  .item__count {
    user-select: none;
  }
`;
const CartPage = ({ cart }) => {
  const dispatch = useDispatch();
  const addToCart = (e, item) => {
    dispatch(ADD_TO_CART(item));
  };
  const deleteFromCart = (e, id) => {
    dispatch(DELETE_FROM_CART(id));
    toast.configure();
    toast.error("Item deleted.");
  };
  const removeCount = (e, id) => {
    dispatch(REMOVE_COUNT(id));
  };
  return (
    <Wrapper>
      <CommonLayout>
        <div className="container">
          <div className="custom__row row">
            <div className="col-lg-6">
              <h4 className="heading">Cart</h4>
            </div>
            <div className="col-lg-6">
              {cart.length ? (
                cart.map((i, index) => (
                  <div className="list" key={i.id}>
                    <h6>{i.name}</h6>
                    <div className="count__wrapper">
                      <i
                        className="fas fa-minus icon"
                        onClick={(e) =>
                          i.count > 1
                            ? removeCount(e, i.id)
                            : deleteFromCart(e, i.id)
                        }
                      ></i>
                      <span className="item__count">{i.count}</span>
                      <i
                        className="fas fa-plus icon"
                        onClick={(e) => addToCart(e, i)}
                      ></i>
                      <i
                        className="fas fa-trash icon"
                        onClick={(e) => deleteFromCart(e, i.id)}
                      ></i>
                    </div>
                  </div>
                ))
              ) : (
                <h5>
                  Cart is empty. <br />
                  Go to home page.
                </h5>
              )}
            </div>
          </div>
        </div>
      </CommonLayout>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({ ...state.Shop, ...state.Common });
export default connect(mapStateToProps)(CartPage);
