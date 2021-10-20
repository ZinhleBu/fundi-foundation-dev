import React from "react";
import Link from 'next/link'

// reactstrap components
import { Button, Col, Modal, ModalBody, ModalFooter } from "reactstrap";

function List() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <>

            <Button
                style={{
                    width: "200px",
                    left: "50%",
                    color: "white",
                    position: "relative"
                }}
                color="primary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
            >
                Open
            </Button>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        #10GoesA LongWAy
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
                    <h1>
                        List of Beneficiaries
                    </h1>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        Close
                    </Button>

                    <Button

                        color="primary" type="button">
                        <a
                            style={{
                                color: "white",
                            }}
                            title="View list of beneficiaries" href="https://fundifoundation.org/Winners_Updated 06 September 2021 Fees Comments .xlsx" download>
                            Download
                        </a>
                    </Button>

                </ModalFooter>
            </Modal>
            
        </>
    );
}

export default List;

