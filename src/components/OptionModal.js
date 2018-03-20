import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>(
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel = "Selected Option"
            onRequestClose={props.handleResetOption}
            closeTimeoutMS={300}
            className='modal'
            ariaHideApp={false}
        >
            <h3
                className='modal__title'
            >
                Ваш выбор
            </h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button
                className='button'
                onClick={props.handleResetOption}
            >
                За дело
            </button>
        </Modal>
);

export default OptionModal;