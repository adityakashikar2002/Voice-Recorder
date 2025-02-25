// // App.js
// import React, { useState } from 'react';
// import RecorderControls from './components/RecorderControls';
// import useRecordingStorage from './components/RecordingStorage';
// import PlaybackList from './components/PlaybackList';
// import MicRecorder from 'mic-recorder-to-mp3';

// const Mp3Recorder = new MicRecorder({ bitRate: 128 });

// const App = () => {
//   const [recordings, setRecordings] = useState([]);
//   const [isRecording, setIsRecording] = useState(false);
//   // const [isPaused, setIsPaused] = useState(false);
//   const { saveRecording, deleteRecording } = useRecordingStorage(setRecordings);

//   const startRecording = () => {
//     Mp3Recorder.start()
//       .then(() => {
//         setIsRecording(true);
//       })
//       .catch((e) => console.error(e));
//   };

//   const stopRecording = () => {
//     Mp3Recorder.stop()
//       .getMp3()
//       .then(([buffer, blob]) => {
//         saveRecording(blob);
//         setIsRecording(false);
//         //setIsPaused(false);
//       })
//       .catch((e) => console.log('Error in stopping the recorder ', e));
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl mt-10">
//       <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">🎙️ Voice Recorder</h1>
//       <RecorderControls
//         isRecording={isRecording}
//         //isPaused={isPaused}
//         startRecording={startRecording}
//         stopRecording={stopRecording}
//       />
//       <PlaybackList recordings={recordings} deleteRecording={deleteRecording} />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import './RecordApp.css'; // Create a CSS file for styling

// function RecordApp() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioData, setAudioData] = useState(null); // Placeholder for audio data
//   const [currentTime, setCurrentTime] = useState(0);

//   const handleRecord = () => {
//     setIsRecording(!isRecording);
//     // Simulate recording and audio data (replace with actual logic)
//     if (!isRecording) {
//       setTimeout(() => {
//         setAudioData('dummy_audio_data'); // Replace with actual audio data
//       }, 2000); // Simulate 2 seconds of recording
//     }
//   };

//   const handlePlay = () => {
//     // Implement play functionality using audioData
//     console.log('Playing audio');
//   };

//   const handleSeek = (e) => {
//     const newTime = parseInt(e.target.value);
//     setCurrentTime(newTime);
//     // Implement seek functionality using audioData and newTime
//   };

//   return (
//     <div className="record-app">
//       <div className="header">
//         <button className="profile-button">👤</button>
//         <input type="text" placeholder="Search" className="search-bar" />
//         <button className="menu-button">☰</button>
//       </div>

//       <div className="language-selector">
//         <div className="language-item">
//           <img src="https://flagcdn.com/us.svg" alt="English" className="flag" />
//           <span>ENGLISH</span>
//         </div>
//         <span>→</span>
//         <div className="language-item">
//           <img src="https://flagcdn.com/fr.svg" alt="French" className="flag" />
//           <span>FRENCH</span>
//         </div>
//       </div>

//       <div className="record-section">
//         <div className="record-circle">
//           <div className="record-button" onClick={handleRecord}>
//             <div className={`microphone ${isRecording ? 'recording' : ''}`}></div>
//           </div>
//         </div>
//         <button className="record-text">RECORD</button>
//       </div>

//       <div className="waveform">
//         {/* Placeholder for waveform visualization */}
//         {audioData && (
//           <div className="waveform-placeholder">
//             {/* Replace with actual waveform rendering */}
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//           </div>
//         )}
//       </div>

//       <div className="timeline">
//         <input
//           type="range"
//           min="0"
//           max="30" // Assuming 30 seconds max
//           value={currentTime}
//           onChange={handleSeek}
//           className="timeline-slider"
//         />
//         <div className="time-labels">
//           <span>{`00:${currentTime < 10 ? '0' + currentTime : currentTime}`}</span>
//           <span>02:30</span>
//         </div>
//       </div>

//       <div className="controls">
//         <button className="control-button">⏮</button>
//         <button className="control-button play-button" onClick={handlePlay}>
//           ▶
//         </button>
//         <button className="control-button">⏭</button>
//       </div>
//     </div>
//   );
// }

// export default RecordApp;

//Works FINE DONT
// import React, { useState } from 'react';
// import './RecordApp.css';
// import MicRecorder from 'mic-recorder-to-mp3';
// import useRecordingStorage from './components/RecordingStorage';
// import PlaybackList from './components/PlaybackList';

// const Mp3Recorder = new MicRecorder({ bitRate: 128 });

// function RecordApp() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioData, setAudioData] = useState(null); // Placeholder for audio data
//   const [currentTime, setCurrentTime] = useState(0);
//   const [recordings, setRecordings] = useState([]);
//   const { saveRecording, deleteRecording } = useRecordingStorage(setRecordings);

//   const handleRecord = () => {
//     if (!isRecording) {
//       startRecording();
//     } else {
//       stopRecording();
//     }
//   };

//   const startRecording = () => {
//     Mp3Recorder.start()
//       .then(() => {
//         setIsRecording(true);
//       })
//       .catch((e) => console.error(e));
//   };

//   const stopRecording = () => {
//     Mp3Recorder.stop()
//       .getMp3()
//       .then(([buffer, blob]) => {
//         saveRecording(blob);
//         setIsRecording(false);
//       })
//       .catch((e) => console.log('Error in stopping the recorder ', e));
//   };

//   const handlePlay = () => {
//     // Implement play functionality using audioData
//     console.log('Playing audio');
//   };

//   const handleSeek = (e) => {
//     const newTime = parseInt(e.target.value);
//     setCurrentTime(newTime);
//     // Implement seek functionality using audioData and newTime
//   };

//   return (
//     <div className="record-app">
//       <div className="header">
//         <button className="profile-button">👤</button>
//         <input type="text" placeholder="Search" className="search-bar" />
//         <button className="menu-button">☰</button>
//       </div>


//       <div className="record-section">
//         <div className="record-circle">
//           <div className="record-button" onClick={handleRecord}>
//             <div className={`microphone ${isRecording ? 'recording' : ''}`}></div>
//           </div>
//         </div>
//         <button className="record-text">RECORD</button>
//       </div>

//       <div className="waveform">
//         {/* Placeholder for waveform visualization */}
//         {audioData && (
//           <div className="waveform-placeholder">
//             {/* Replace with actual waveform rendering */}
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//             <div className="waveform-line"></div>
//           </div>
//         )}
//       </div>

//       <div className="timeline">
//         <input
//           type="range"
//           min="0"
//           max="30" // Assuming 30 seconds max
//           value={currentTime}
//           onChange={handleSeek}
//           className="timeline-slider"
//         />
//         <div className="time-labels">
//           <span>{`00:${currentTime < 10 ? '0' + currentTime : currentTime}`}</span>
//           <span>02:30</span>
//         </div>
//       </div>

//       <div className="controls">
//         <button className="control-button">⏮</button>
//         <button className="control-button play-button" onClick={handlePlay}>
//           ▶
//         </button>
//         <button className="control-button">⏭</button>
//       </div>

//       <PlaybackList recordings={recordings} deleteRecording={deleteRecording} />
//     </div>
//   );
// }

// export default RecordApp;

// import React, { useState, useRef, useEffect } from 'react';
// import './RecordApp.css';
// import MicRecorder from 'mic-recorder-to-mp3';
// import useRecordingStorage from './components/RecordingStorage';
// import PlaybackList from './components/PlaybackList';

// const Mp3Recorder = new MicRecorder({ bitRate: 128 });

// function RecordApp() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [recordings, setRecordings] = useState([]);
//   const [selectedRecording, setSelectedRecording] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [recordingName, setRecordingName] = useState('New Recording');

//   const { saveRecording, deleteRecording } = useRecordingStorage(setRecordings);
//   const audioRef = useRef(null);

//   const handleRecord = () => {
//     if (!isRecording) {
//       startRecording();
//     } else {
//       stopRecording();
//     }
//   };

//   const startRecording = () => {
//     Mp3Recorder.start()
//       .then(() => {
//         setIsRecording(true);
//         setRecordingName(`Recording ${recordings.length + 1}`);
//       })
//       .catch((e) => console.error(e));
//   };

//   const stopRecording = () => {
//     Mp3Recorder.stop()
//       .getMp3()
//       .then(([buffer, blob]) => {
//         saveRecording(blob);
//         setIsRecording(false);
//       })
//       .catch((e) => console.log('Error in stopping the recorder ', e));
//   };

//   const handlePlay = () => {
//     if (selectedRecording && audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleSeek = (e) => {
//     if (selectedRecording && audioRef.current) {
//       const newTime = parseInt(e.target.value);
//       audioRef.current.currentTime = newTime;
//       setCurrentTime(newTime);
//     }
//   };

//   const handleRecordingSelect = (recording) => {
//     setSelectedRecording(recording);
//     setCurrentTime(0);
//     setIsPlaying(false);
//     if (audioRef.current) {
//       audioRef.current.load();
//     }
//   };

//   useEffect(() => {
//     if (selectedRecording && audioRef.current) {
//       audioRef.current.addEventListener('timeupdate', () => {
//         setCurrentTime(audioRef.current.currentTime);
//       });
//     }
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.removeEventListener('timeupdate', () => {});
//       }
//     };
//   }, [selectedRecording]);

//   return (
//     <div className="record-app">
//       <div className="header">
//         <button className="profile-button">👤</button>
//         <input type="text" placeholder="Search" className="search-bar" />
//         <button className="menu-button">☰</button>
//       </div>

//       <div className="record-section">
//         <div className="record-circle">
//           <div className="record-button" onClick={handleRecord}>
//             <div className={`microphone ${isRecording ? 'recording' : ''}`}></div>
//           </div>
//         </div>
//         <button className="record-text">RECORD</button>
//       </div>

//       <div className="waveform">
//         {selectedRecording && (
//           <div className="waveform-placeholder">
//             <audio ref={audioRef} src={URL.createObjectURL(selectedRecording.blob)} style={{ display: 'none' }} />
//             {[...Array(20)].map((_, i) => (
//               <div
//                 key={i}
//                 className="waveform-line"
//                 style={{ height: `${Math.random() * 40 + 20}px` }}
//               ></div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="timeline">
//         <input
//           type="range"
//           min="0"
//           max={selectedRecording ? audioRef.current?.duration || 30 : 30}
//           value={currentTime}
//           onChange={handleSeek}
//           className="timeline-slider"
//         />
//         <div className="time-labels">
//           <span>{`00:${currentTime < 10 ? '0' + currentTime : currentTime.toFixed(0)}`}</span>
//           <span>{selectedRecording ? `00:${Math.floor(audioRef.current?.duration / 60)}:${Math.floor(audioRef.current?.duration % 60)}` : '02:30'}</span>
//         </div>
//         {selectedRecording && <div className="recording-name">{recordingName}</div>}
//       </div>

//       <div className="controls">
//         <button className="control-button">⏮</button>
//         <button className="control-button play-button" onClick={handlePlay}>
//           {isPlaying ? '⏸' : '▶'}
//         </button>
//         <button className="control-button">⏭</button>
//       </div>

//       <PlaybackList recordings={recordings} deleteRecording={deleteRecording} onSelect={handleRecordingSelect} />
//     </div>
//   );
// }

// export default RecordApp;

// RecordApp.js works LIT
// import React, { useState } from 'react';
// import './RecordApp.css';
// import MicRecorder from 'mic-recorder-to-mp3';
// import useRecordingStorage from './components/RecordingStorage';
// import PlaybackList from './components/PlaybackList';

// const Mp3Recorder = new MicRecorder({ bitRate: 128 });

// function RecordApp() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioData, setAudioData] = useState(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);
//   const [recordings, setRecordings] = useState([]);
//   const { saveRecording, deleteRecording } = useRecordingStorage(setRecordings);

//   const handleRecord = () => {
//     if (!isRecording) {
//       startRecording();
//     } else {
//       stopRecording();
//     }
//   };

//   const startRecording = () => {
//     Mp3Recorder.start()
//       .then(() => {
//         setIsRecording(true);
//         setCurrentTime(0);
//       })
//       .catch((e) => console.error(e));
//   };

//   const stopRecording = () => {
//     Mp3Recorder.stop()
//       .getMp3()
//       .then(([buffer, blob]) => {
//         const audioUrl = URL.createObjectURL(blob);
//         const audio = new Audio(audioUrl);

//         audio.addEventListener('loadedmetadata', () => {
//           const duration = Math.floor(audio.duration);
//           setTotalDuration(duration);
//         });

//         saveRecording(blob);
//         setAudioData(blob);
//         setIsRecording(false);
//       })
//       .catch((e) => console.log('Error in stopping the recorder', e));
//   };

//   const handlePlay = () => {
//     if (audioData) {
//       const audioUrl = URL.createObjectURL(audioData);
//       const audio = new Audio(audioUrl);
//       audio.play();
//       audio.ontimeupdate = () => setCurrentTime(Math.floor(audio.currentTime));
//     }
//   };

//   const handleSeek = (e) => {
//     const newTime = parseInt(e.target.value);
//     setCurrentTime(newTime);
//   };

//   return (
//     <div className="record-app">
//       <div className="header">
//         <button className="profile-button">👤</button>
//         <input type="text" placeholder="Search" className="search-bar" />
//         <button className="menu-button">☰</button>
//       </div>

//       <div className="record-section">
//         <div className="record-circle">
//           <div className="record-button" onClick={handleRecord}>
//             <div className={`microphone ${isRecording ? 'recording' : ''}`}></div>
//           </div>
//         </div>
//         <button className="record-text">{isRecording ? 'STOP' : 'RECORD'}</button>
//       </div>

//       <div className="waveform">
//         {audioData && (
//           <div className="waveform-placeholder">
//             {[...Array(8)].map((_, i) => (
//               <div key={i} className="waveform-line"></div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="timeline">
//         <input
//           type="range"
//           min="0"
//           max={totalDuration}
//           value={currentTime}
//           onChange={handleSeek}
//           className="timeline-slider"
//         />
//         <div className="time-labels">
//           <span>{`00:${currentTime < 10 ? '0' + currentTime : currentTime}`}</span>
//           <span>{`00:${totalDuration < 10 ? '0' + totalDuration : totalDuration}`}</span>
//         </div>
//       </div>

//       <div className="controls">
//         <button className="control-button">⏮</button>
//         <button className="control-button play-button" onClick={handlePlay}>
//           ▶
//         </button>
//         <button className="control-button">⏭</button>
//       </div>

//       <PlaybackList recordings={recordings} deleteRecording={deleteRecording} />
//     </div>
//   );
// }

// export default RecordApp;

// Updated RecordApp.js
import React, { useState, useRef } from 'react';
import './RecordApp.css';
import MicRecorder from 'mic-recorder-to-mp3';
import useRecordingStorage from './components/RecordingStorage';
import PlaybackList from './components/PlaybackList';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function RecordApp() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const { saveRecording, deleteRecording } = useRecordingStorage(setRecordings);
  const audioRef = useRef(null);

  const handleRecord = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    Mp3Recorder.start()
      .then(() => {
        setIsRecording(true);
      })
      .catch((e) => console.error(e));
  };

  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const newRecording = {
          id: Date.now(),
          blob,
        };
        saveRecording(blob);
        setAudioData(newRecording);
        setIsRecording(false);
      })
      .catch((e) => console.log('Error in stopping the recorder ', e));
  };

  const handlePlay = () => {
    if (audioData) {
      const url = URL.createObjectURL(audioData.blob);
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };
  const handleSkip = (seconds) => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime + seconds;
  
      // Prevent going beyond the audio duration
      newTime = Math.min(Math.max(newTime, 0), audioRef.current.duration);
  
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime); // Update the slider
    }
  };
  
  const handlePlayFromList = (blob) => {
    const url = URL.createObjectURL(blob);
    audioRef.current.src = url;
    audioRef.current.play();
  };

  const handleSeek = (e) => {
    const newTime = parseInt(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (timeInSeconds) => {
    const hrs = Math.floor(timeInSeconds / 3600);
    const mins = Math.floor((timeInSeconds % 3600) / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="record-app">
      <div className="header">
        <button className="profile-button">👤</button>
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="menu-button">☰</button>
      </div>

      <div className="record-section">
        <div className="record-circle">
          <div className="record-button" onClick={handleRecord}>
            <div className={`microphone ${isRecording ? 'recording' : ''}`}></div>
          </div>
        </div>
        <button className="record-text">RECORD</button>
      </div>

      <div className="waveform">
        {audioData && (
          <div className="waveform-placeholder">
            <div className="waveform-line"></div>
            <div className="waveform-line"></div>
            <div className="waveform-line"></div>
            <div className="waveform-line"></div>
            <div className="waveform-line"></div>
          </div>
        )}
      </div>

      <div className="timeline">
        {/* <input
          type="range"
          min="0"
          max={audioRef.current ? audioRef.current.duration : 30}
          value={currentTime}
          onChange={handleSeek}
          className="timeline-slider"
        /> */}
        <input
          type="range"
          min="0"
          max={audioRef.current && !isNaN(audioRef.current.duration) ? Math.floor(audioRef.current.duration) : 0}
          value={currentTime}
          onChange={handleSeek}
          className="timeline-slider"
        />

        {/* <div className="time-labels">
          <span>{`00:${currentTime < 10 ? '0' + currentTime : currentTime}`}</span>
          <span>{audioRef.current ? `00:${Math.floor(audioRef.current.duration)}` : '02:30'}</span>
        </div>*/}
        <div className="time-labels">
          <span>{formatTime(currentTime)}</span>
          <span>{audioRef.current && !isNaN(audioRef.current.duration) ? formatTime(audioRef.current.duration) : '00:00:00'}</span>
        </div>

        </div>


      {/* <div className="controls">
        <button className="control-button">⏮</button>
        <button className="control-button play-button" onClick={handlePlay}>
          ▶
        </button>
        <button className="control-button">⏭</button>
      </div> */}

      <div className="controls">
        {/* Skip Backward by 5 seconds */}
        <button className="control-button" onClick={() => handleSkip(-5)}>⏮</button>

        {/* Play/Pause Button */}
        <button className="control-button play-button" onClick={handlePlay}>
          ▶
        </button>

        {/* Skip Forward by 5 seconds */}
        <button className="control-button" onClick={() => handleSkip(5)}>⏭</button>
      </div>


      {/* <audio ref={audioRef} onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)} />
       */}
      <audio
      ref={audioRef}
      onTimeUpdate={() => setCurrentTime(audioRef.current ? audioRef.current.currentTime : 0)}
      onLoadedMetadata={() => setCurrentTime(0)} // Set time to 0 when audio loads
      />


      <PlaybackList recordings={recordings} deleteRecording={deleteRecording} handlePlayFromList={handlePlayFromList} />
    </div>
  );
}

export default RecordApp;