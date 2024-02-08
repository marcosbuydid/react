import { useState } from 'react';
import Modal from 'react-modal';
import './CustomModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CustomModal = () => {

    const [isVisible, setIsVisible] = useState(true)

    const onCloseModal = () => {
        console.log('closing modal');
        setIsVisible(false);
    }

    return (
        <Modal
            isOpen={isVisible}
            onRequestClose={onCloseModal}
            style={customStyles}
            className={"modal"}
            //modal-background is from imported css
            overlayClassName={"modal-background"}
            closeTimeoutMS={200}
        >
            <h1> New Event</h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label className="mb-2">Date and Time</label>
                    <input className="form-control" placeholder="Start Date" />
                </div>

                <div className="form-group mb-2">

                    <input className="form-control" placeholder="End Date" />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label className="mb-2">Title and Notes</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Event Title"
                        name="title"
                        autoComplete="off"
                    />

                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notes"
                        rows="5"
                        name="notes"
                    ></textarea>
                </div>

                <div className="d-flex justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Save</span>
                    </button>
                </div>
            </form>

        </Modal>
    )
}
