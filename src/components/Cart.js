import React, { Component } from 'react';
import CartIcon from '../assets/images/cart-icon-cart.png';

class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <div id="cart-loader" style={{display: 'none'}}>
          <div>
            <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
          </div>
        </div>
        <h3 className="cart-header">
          <button className="btn cart-mobile-btn visible-xs" data-toggle="collapse" data-target=".cart-content">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            CART
          </button>
          <span className="cart-discount-description"></span>
          <span className="hidden-md hidden-sm hidden-xs">/</span>
          <br className="visible-md"/>
          <span className="hidden-xs">
            <span className="cart-total-saved">$0</span>
            SAVED
          </span>
          <div className="cart-mobile-total">
            You Owe
            <span className="cart-total-amt">$0</span>
            *
          </div>
          <div
            className="couponContainerMessage"
            style=
              {{
                display: 'none',
                borderBottom: '1px solid',
                paddingBottom: '10px',
                marginBottom: '20px'
              }}>
          </div>
        </h3>
        <div className="cart-content collapse">
          <div className="cart-coupon-container" style={{display: 'none'}}></div>
          <img className="cart-icon" src={CartIcon} alt="" />
          <div className="cart-selections"></div>
          <div className="cart-subtotal">
            <div className="row">
              <div className="col-sm-6 col-xs-8">Total Selections</div>
              <div className="col-sm-6 col-xs-4">
                <span className="cart-subtotal-amt">$0</span>
              </div>
            </div>
          </div>
          <div className="cart-total">
            <div className="row cart-credit-row">
              <div className="col-sm-6 col-xs-8">
                <span className="cart-credit-applied-text"></span>
              </div>
              <div className="col-sm-6 col-xs-4">
                -$<span className="cart-credit-applied-amt">0</span>
              </div>
            </div>
            <div className="row cart-promotion-row" style={{display: 'none'}}>
              <div className="col-sm-6 col-xs-8">
                <em>Discounts Applied</em>
              </div>
              <div className="col-sm-6 col-xs-4">
                -$<span className="cart-promotion-amt">0</span>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xs-8">TOTAL*</div>
              <div className="col-sm-6 col-xs-4">
                <span className="cart-total-amt">$0</span>
                *
              </div>
            </div>
          </div>
          <div className="cart-disclaimer">
            <span className="cart-disclaimer">*Includes applied discounts.</span>
          </div>						
        </div>
        <div className="cart-navigation">
          <button className="btn btn-info cart-btn-prev" style={{display: 'none'}}>PREV</button>
          <button className="btn btn-default cart-btn-next" data-current="1" data-next="2">NEXT</button>
        </div>
        <div className="cart-delivery"></div>
        <input type="hidden" name="selections" id="selections" value=""/>
        <input type="hidden" name="totalItems" id="totalItems" value="0" />
        <input type="hidden" name="optionalDeliveryFee" id="optionalDeliveryFee" value="0" />
        <input type="hidden" name="credit" id="credit" value="" />
        <input type="hidden" name="creditThresholdAmt" id="creditThresholdAmt" value="" />                            
        <input type="hidden" name="creditApplicationType" id="creditApplicationType" value="" />
        <input type="hidden" name="creditApplied" id="creditApplied" value="" />
        <input type="hidden" name="creditType" id="creditType" value="" />
        <input type="hidden" name="couponThreshold" id="couponThreshold" value="" />
        <input type="hidden" name="cost" id="cost" value="0" />
        <input type="hidden" name="discountApplied" id="discountApplied" value="0" /> 
        <input type="hidden" name="discountType" id="discountType" value="" /> 
        <input type="hidden" name="discountApplicationAmt" id="discountApplicationAmt" value="" /> 
        <input type="hidden" name="cartDiscountRemainingAmt" id="cartDiscountRemainingAmt" value="0" />                           
        <input type="hidden" name="gearMin" id="gearMin" value="0" />
        <input type="hidden" name="orderType" id="orderType" value="NEW" />
        <input type="hidden" name="propertyGroupName" id="propertyGroupName" value="" />
        <input type="hidden" name="reservationTypeName" id="reservationTypeName" value="" />
        <input type="hidden" name="totalItemPrice" id="totalItemPrice" value="0" />                           
        <input type="hidden" name="orderId" id="orderId" value="0" />
        <input type="hidden" name="coid" value="<?php echo $reservationInfo['coid']; ?>" />
        <input type="hidden" name="reservationNumber" value="<?php echo $reservationId; ?>" id="reservationNumber"/>
        <input type="hidden" value="<?php echo $systemMode; ?>" name="mode" />
      </div>
    );
  }
}

export default Cart;