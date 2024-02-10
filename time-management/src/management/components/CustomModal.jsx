import { useState, useMemo } from 'react';
import Modal from 'react-modal';
import './CustomModal.css';
import { addHours, differenceInSeconds } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import { useUiStore } from '../../hooks/useUiStore';

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

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { isCustomModalOpen, closeCustomModal } = useUiStore();

    const onCloseModal = () => {
        closeCustomModal();
    }

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        startDate: new Date(),
        endDate: addHours(new Date(), 1),
    })

    const titleValidationClass = useMemo(() => {
        if (!formSubmitted) {
            return '';
        }
        return (formValues.title.length > 2)
            ? 'is-valid'
            : 'is-invalid';

    }, [formValues.title, formSubmitted])

    const notesValidationClass = useMemo(() => {
        if (!formSubmitted) {
            return '';
        }
        return (formValues.notes.length > 14)
            ? 'is-valid'
            : 'is-invalid';

    }, [formValues.notes, formSubmitted])

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onStartDateChange = (date) => {
        setFormValues({
            ...formValues,
            startDate: date
        })
    }

    const onEndDateChange = (date) => {
        setFormValues({
            ...formValues,
            endDate: date
        })
    }

    const onFormSubmit = (event) => {

        event.preventDefault();
        setFormSubmitted(true);

        const difference = differenceInSeconds(formValues.endDate, formValues.startDate);

        if (isNaN(difference) || difference <= 0) {
            Swal.fire('End time not valid', 'Choose another after start time', 'error');
            return;
        }

        if (formValues.title.length < 3) {
            Swal.fire('Title name not found', 'Write a title name of at least 3 chars', 'error');
            return;
        }

        if (formValues.notes.length < 15) {
            Swal.fire('Notes cannot be empty', 'Write a note of at least 15 chars', 'error');
            return;
        }
    }

    return (
        <Modal
            isOpen={isCustomModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className={"modal"}
            //modal-background is from imported css
            overlayClassName={"modal-background"}
            closeTimeoutMS={200}
        >
            <h1> New Event</h1>
            <hr />
            <form className="container" onSubmit={onFormSubmit}>

                <div className="form-group mb-2">
                    <label className="mb-2">Date and Time</label>
                    <div>
                        <DatePicker
                            selected={formValues.startDate}
                            onChange={(date) => onStartDateChange(date)}
                            className="form-control"
                            dateFormat={"Pp"}
                            showTimeSelect
                        />
                    </div>

                </div>

                <div className="form-group mb-2">
                    <div>
                        <DatePicker
                            minDate={formValues.startDate}
                            selected={formValues.endDate}
                            onChange={(date) => onEndDateChange(date)}
                            className="form-control"
                            dateFormat={"Pp"}
                            showTimeSelect
                        />
                    </div>
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label className="mb-2">Title and Notes</label>
                    <input
                        type="text"
                        className={`form-control mb-2 ${titleValidationClass}`}
                        placeholder="Event Title"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />

                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className={`form-control ${notesValidationClass}`}
                        placeholder="Notes"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-between">
                    <div >
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-block"
                            onClick={onCloseModal}
                        >
                            <i className="fa-regular fa-circle-xmark"></i>
                            <span> Close</span>
                        </button>
                    </div>
                    <div >
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block"
                        >
                            <i className="far fa-save"></i>
                            <span> Save</span>
                        </button>
                    </div>
                </div>
            </form>

        </Modal>
    )
}
