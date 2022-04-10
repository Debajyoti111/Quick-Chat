import React, { useContext, useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';
import '../styles.css';

export const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    return (
        <>
            <style type="text/css">
                {`
                    .div-form {
                        background-color: grey;
                        margin: 1rem;
                    }

                    .btn-xxl {
                        margin: 1rem 1.5rem;
                        font-size: 1rem;
                    }
                `}
            </style>

            <Container>
                <div variant="form">
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <h4>Account Info</h4>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows="1"
                                        placeholder="Name" value={name}
                                        onChange={(e) => { setName(e.target.value) }} />
                                </Form.Group>
                                <CopyToClipboard text={me}>
                                    <Button variant="primary" size="xxl" >
                                        Copy Your Id
                                    </Button>
                                </CopyToClipboard>
                            </Col>
                            <Col xs={12} md={6}>
                                <h4>Call Someone</h4>
                                <Form.Group className="mb-3">
                                    <Form.Label>Id To Call</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Id to Call"
                                        as="textarea"
                                        rows="1"
                                        value={idToCall}
                                        onChange={(e) => { setIdToCall(e.target.value) }} />
                                </Form.Group>
                                {
                                    callAccepted && !callEnded ? (
                                        <Button variant="primary" onClick={leaveCall} size="xxl">
                                            Hang Up
                                        </Button>
                                    ) : (
                                            <Button variant="primary" onClick={() => callUser(idToCall)} size="xxl">
                                            Make A Call
                                        </Button>
                                    )
                                }
                            </Col>
                        </Row>
                    </Form>
                    {children}
                </div>
            </Container>
        </>
    )
}
