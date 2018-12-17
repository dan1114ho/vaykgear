import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getDataSaga, getModalSaga, initializeModal } from '../../_actions';
import { Tab } from 'semantic-ui-react';
import ServiceComponent from '../../components/Service';
import CartComponent from '../../components/Cart';
import ServiceDetailModal from '../../components/modals/ServiceDetailModal';

import './service.css';

class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleDetailClick = this.handleDetailClick.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  handleDetailClick = (serviceId) => () => {
    const { getModalContent } = this.props;
    getModalContent(serviceId);
    this.setState({ showModal: true });
  }

  handleDetailClose = () => () => {
    setTimeout(() => {
      this.setState({ showModal: false });
      this.props.initializeModal();
    }, 300);
  }

  render() {
    const { services, checkoutInfo, modalContent } = this.props;
    const icons = {
      '1': 'tripadvisor',
      '2': 'bicycle'
    };
    const panes = _.map(services, serviceByCategory => {
      const pane = {
        'menuItem': { key: serviceByCategory.categoryId, icon: icons[serviceByCategory.categoryId], content: serviceByCategory.categoryName },
        render: () => (
          <Tab.Pane>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div className="container-services">
                    <div className="row">
                      {
                        _.map(serviceByCategory.services, service => (
                          <ServiceComponent service={service} handleDetailClick={this.handleDetailClick} key={service.id} />
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <CartComponent />
                </div>
              </div>
            </div>
          </Tab.Pane>
        )
      };
      return pane;
    });
    
    return (
      <div>
        { _.isEmpty(services) ?  
          <div id="site-loader">
            <div>
              <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
            </div>
          </div>
          : 
          <div className="wrapper">
            <div id="site-page-guestinfo" className="container-fluid">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div className="guestinfo-container">
                    <strong><span className="general-order-type">NEW</span></strong> 
                    &nbsp;ORDER | Res # <span className="general-reservation-number">{checkoutInfo.reservationNumber}</span> 
                    <span className="hidden-sm hidden-xs"> | </span><br className="visible-sm visible-xs" />
                    <strong><span className="general-discount-description">{checkoutInfo.creditDiscountDisplay}</span></strong>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div className="greeting-container">
                    <div className="greeting-line1">Hello <span className="general-guest-last-name">{checkoutInfo.guestLastName}</span>,</div>
                    <div className="greeting-line2">Before selecting your Beach Gear, you can also apply your Credit to these experiences.<br />
                      <span style={{fontSize: '14px'}}>
                        <a href='javascript:void(0);' className="general-btn-skip" style={{textDecoration: 'underline'}}>Skip</a>, just show me the gear.
                      </span><br />
                    </div>
                  </div>
                  <div id="early-message" style={{display: 'none'}}></div>
                </div>
              </div>
            </div>
            { this.state.showModal === true ?
              <ServiceDetailModal modalContent={modalContent} handleDetailClose={this.handleDetailClose} show={true} />
              : null
            }
            <Tab panes={panes} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  services: state.dataReducer.services,
  checkoutInfo: state.dataReducer.checkoutInfo,
  modalContent: state.dataReducer.modalContent,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getDataSaga()),
  getModalContent: (serviceId) => dispatch(getModalSaga(serviceId)),
  initializeModal: () => dispatch(initializeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
// export default Service;
