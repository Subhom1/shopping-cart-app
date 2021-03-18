import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  FETCH_PRODUCT_LIST,
  ADD_TO_CART,
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
`;
const HomePage = (props) => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState(true);
  useEffect(() => {
    dispatch(FETCH_PRODUCT_LIST());
  }, [dispatch]);
  useEffect(() => {
    setPending(false);
  }, [props.products]);

  const addToCart = (e, item) => {
    dispatch(ADD_TO_CART({ ...item, count: 1 }));
    toast.configure();
    toast.success("Item added. Go to cart.");
  };
  return (
    <Wrapper>
      <CommonLayout>
        <div className="container">
          <div className="custom__row row">
            <div className="col-lg-6">
              <h4 className="heading">Products</h4>
            </div>
            <div className="col-lg-6">
              {pending ? (
                <h5>Loading...</h5>
              ) : (
                props.products.map((i, index) => (
                  <div className="list" key={i.id}>
                    <h6>{i.name}</h6>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={(e) => addToCart(e, i)}
                    >
                      Add To Cart
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </CommonLayout>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({ ...state.Shop, ...state.Common });
export default connect(mapStateToProps)(HomePage);
