import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import {SocketContext} from '../SocketContext';

export const Notifications = () => {
  const { answerCall, call, callAccepted, callEnded} = useContext(SocketContext);

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
    {
     (
      !callEnded && callAccepted &&  <div>
          <h1>{call.name || "Name"} is calling: </h1>
            <Button variant="primary" onClick={answerCall} size="xxl">
            Answer
          </Button>
        </div>
      )
    }
    </>
  )
}
