import React from "react";

// reactstrap components
import { Button, Col, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <>
            <Button
            style={{
                left:"50%",
                position:"absolute"}}
                color="primary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
            >
                Download
            </Button>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        FundiFoundation Trust
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
                <ModalBody>
                    <h1>Download our Registration Certificate </h1>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        Close
                    </Button>

                    <Button color="primary" type="button">
                        <a title="Download Registration Form" href="https://fundi-foundation-dev-chi.vercel.app/Fundi_Foundation_Trust_REGISTRATION.pdf" download>
                            Download
                        </a>
                    </Button>

                </ModalFooter>
            </Modal>
        </>
    );
}

export default Example;

