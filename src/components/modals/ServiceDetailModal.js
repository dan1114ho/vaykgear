import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

class ServiceDetailModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainPhoto: ''
    }
  }

  handleThumbnailClick = (imageUrl) => () => {
    this.setState({ mainPhoto: imageUrl });
  }

  render() {
    const { modalContent, show, handleDetailClose } = this.props;
    
    return (
      <Fragment>
        {
          _.isEmpty(modalContent) !== true &&
          <Modal show={show} onHide={handleDetailClose()}>
            <button type="button" className="close" onClick={handleDetailClose()}>×</button>
            <Modal.Header />
            
              <Modal.Body>
                <div className="product-gallery">
                  <h3 className="product-photo-title">{modalContent.rowGear.name}</h3>
                  <div className="product-mainphoto">
                    <img src={this.state.mainPhoto === '' ? modalContent.rowGear.photo : this.state.mainPhoto} alt="" />
                  </div>
                  <ul className="product-thumbnails">
                    { modalContent.gearImages !== null &&
                      <div>
                        <li key={modalContent.rowGear.photo} onClick={this.handleThumbnailClick(modalContent.rowGear.photo)}>
                          <img src={modalContent.rowGear.photo} alt="" />
                        </li>
                        {
                          _.map(modalContent.gearImages, gearImage => (
                            <li key={gearImage.image_url} onClick={this.handleThumbnailClick(gearImage.image_url)}>
                              <img src={gearImage.image_url} alt="" />
                            </li>
                          ))
                        }
                      </div>
                    }
                  </ul>
                </div>
                <div className="product-details">
                  {ReactHtmlParser(modalContent.rowGear.description)}
                </div>
              </Modal.Body>
          </Modal>
        }
      </Fragment>
    );
  }
}

export default ServiceDetailModal;