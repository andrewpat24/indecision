import React from 'react'; 
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            className="modal"
            isOpen={!!props.selectedOption}
            contentLabel={"Selected Option"}
            ariaHideApp={false}
            onRequestClose={props.handleCloseModal}
            closeTimeoutMS={200}
        >
            <h3 className="modal__title">Selected Option</h3>
            <h4 className="modal__body">{props.selectedOption}</h4>
            <button className="button" onClick={props.handleCloseModal}>Close</button>
        </Modal>
    );
}

export default OptionModal; 