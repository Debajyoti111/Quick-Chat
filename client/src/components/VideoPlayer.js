import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (<>
                <Row>
                {stream && (
                <Col xs={12} md={6}>
                <h3>{name || "Name"}</h3>
                <video playsInline muted ref={myVideo} autoPlay className='video'/>  
                </Col>                      
                )}
                {callAccepted && !callEnded && (
                    <Col xs={12} md={6}>
                <h3>{call.name || "Name"} </h3>
                <video playsInline ref={userVideo} autoPlay className='video'/>
                    </Col>
                )}
        </Row>
    </>
    );
};

export default VideoPlayer;
