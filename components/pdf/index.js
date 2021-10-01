import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <>
            <Button
                color="primary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
            >
                Launch demo modal
            </Button>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        Modal title
                    </h5>
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>...</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        Close
                    </Button>
                    <Button color="primary" type="button">
                        <a  title="Download Registration Form" href="https://fundi-foundation-dev-chi.vercel.app/public/Fundi_Foundation_Trust_REGISTRATION.pdf">
                            Download 
                        </a>
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Example;

