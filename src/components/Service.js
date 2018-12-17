import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Service extends Component {
  render() {
    const { service, handleDetailClick } = this.props;
    const regularPrice = (service.priceReg !== '' && service.priceReg !== '0.00' && service.priceReg !== 0) ? `$${service.priceReg}` : '';

    return (
      <div className="service-product product-hasdescription col-md-6" id={service.id}>
        <div className="row">
          <div className="col-md-12">
            <div style=
              {{
                marginBottom: '15px',
                textAlign: 'center',
                width: '100%',
                minHeight: '300px',
                backgroundSize: 'cover',
                backgroundImage: `url(${service.photo})`
              }}
            >
              <div style=
                {{
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  background: 'rgba(76,96,59,0.9)',
                  padding: '15px 20px 15px 20px',
                  minWidth: '120px; line-height: 1.2'
                }}
              >
                <span
                  className="service-title"
                  style=
                  {{
                    fontSize: '14px',
                    letterSpacing: '4px'
                  }}
                >
                  {service.name}
                </span><br/>
                <span
                  className="service-price-reg"
                  style=
                    {{
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                >
                  {regularPrice}
                </span><br />
                <span
                  className="service-offer"
                  style={{fontSize: '16px'}}
                >
                  Credit You Can Apply: <br className="visible-md visible-sm visible-xs"/><strong>${service.price}</strong> {service.priceTerms}
                </span>	            						
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-xs-4">
                <button className="btn btn-info btn-product-details" data-product={service.id} onClick={handleDetailClick(service.id)}>DETAILS</button>
              </div>				
              <div className="col-xs-8">
                <div className="service-voucher-options">						
                  {service.available !== 0 ?
                    <span>
                      <span className="product-quantity">
                        <input
                          type="button"
                          value="-"
                          className="product-quantity-minus product-quantity-change"
                          data-product={service.id}
                        />
                        <input
                          type="text"
                          name="quantity[]"
                          id={`quantity-${service.id}`}
                          className="product-quantity-amt"
                          min="0"
                          max="14"
                          value="0"
                        />
                        <input
                          type="button"
                          value="+"
                          className="product-quantity-plus product-quantity-change"
                          data-product={service.id}
                        />
                      </span>
                      <span className="product-price" style={{float: 'right', marginRight: '15px', fontSize: '18px'}}>
                        <strong>${service.price}</strong> Voucher
                      </span>
                    </span>
                    :
                    <span className="product-quantity not-available">
                      <input
                        type="hidden"
                        value="0"
                        id={`quantity-${service.id}`}
                        name="quantity[]"
                      />
                      No Availability
                    </span>
                  }
                </div>
                <div className="service-voucher-message" style={{display: 'none'}}>
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                  <strong>Not Available:</strong> Not have enough credit available to select.
                  Contact {service.vendorName} to order, {service.vendorPhone}.
                </div>
              </div>
            </div>			
            <input type="hidden" id={`productType-${service.id}`} value="2"/>
            <input type="hidden" id={`price-${service.id}`} value={service.price}/>
            <input type="hidden" id={`name-${service.id}`} value={service.name}/>
            <input type="hidden" id={`quantity-${service.id}`} value={0}/>
            <input type="hidden" id={`vendor-${service.id}`} value={service.vendorId}/>
            <input type="hidden" id={`idThirdParty-${service.id}`} value={service.idThirdParty}/>		
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="service-disclaimer">
              <strong>*How It Works:</strong>
              {ReactHtmlParser(service.instructionsText)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;