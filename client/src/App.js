import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import {Options} from './components/Options';
import {Notifications} from './components/Notifications';

export default function App() {
  return (
    <div>
        <h2 className='head-text'>Video Chat</h2>
        <div className='component-heading'>
            <VideoPlayer />
            <div className="form-class">
            <Options>
                <Notifications />
            </Options>
            </div>
            {/* Video Player */}
            {/* Options -> Notifications */} 
        </div>
    </div>
  )
}
