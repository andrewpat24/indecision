import React from 'react'; 
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel={"Selected Option"}
            ariaHideApp={false}
            onRequestClose={props.handleCloseModal}
        >
            <h3>Selected Option</h3>
            <h4>{props.selectedOption}</h4>
            <button onClick={props.handleCloseModal}>Close</button>
        </Modal>
    )
}

export default OptionModal; 