//RecordApp.js
import React, { useState, useRef, useEffect } from 'react';
import './RecordApp.css';
import MicRecorder from 'mic-recorder-to-mp3';
import useRecordingStorage from './components/RecordingStorage';
import PlaybackList from './components/PlaybackList';
import WaveSurfer from 'wavesurfer.js';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function RecordApp() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const { saveRecording, deleteRecording } = useRecordingStorage(setRecordings);
  const audioRef = useRef(null);
  const waveformRef = useRef(null);
  let timerInterval;

  useEffect(() => {
    waveformRef.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#4A90E2',
      cursorColor: '#4A90E2',
      height: 80,
      responsive: true,
    });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setStatusMessage('');
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

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
        setRecordingTime(0);
        setStatusMessage('New Recording');
        timerInterval = setInterval(() => {
          setRecordingTime((prevTime) => prevTime + 1);
        }, 1000);
      })
      .catch((e) => console.error(e));
  };

  const stopRecording = () => {
    clearInterval(timerInterval);
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        saveRecording(blob);
        setIsRecording(false);
        setRecordingTime(0);
      })
      .catch((e) => console.error('Error in stopping the recorder', e));
  };

  
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        waveformRef.current.load(audioRef.current);
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleSkip = (seconds) => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime + seconds;
      newTime = Math.min(Math.max(newTime, 0), audioRef.current.duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handlePlayFromList = (blob, id) => {
    const url = URL.createObjectURL(blob);
    audioRef.current.src = url;
    audioRef.current.play();
    waveformRef.current.load(audioRef.current);
    setCurrentlyPlayingId(id);
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
      <video className="background-video" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
        <button className="record-text">{isRecording ? 'STOP' : 'RECORD'}</button>
        {isRecording && (
          <div className="recording-time">{formatTime(recordingTime)}</div>
        )}
      </div>

      {statusMessage && <div className="status-message">{statusMessage}</div>}

      <div id="waveform" className="waveform-container"></div>

      <div className="timeline">
        <input
          type="range"
          min="0"
          max={audioRef.current && !isNaN(audioRef.current.duration) ? Math.floor(audioRef.current.duration) : 0}
          value={currentTime}
          onChange={handleSeek}
          className="timeline-slider"
        />
        <div className="time-labels">
          <span>{formatTime(currentTime)}</span>
          <span>{audioRef.current && !isNaN(audioRef.current.duration) ? formatTime(audioRef.current.duration) : '00:00:00'}</span>
        </div>
      </div>

      <div className="controls">
        <button className="control-button" onClick={() => handleSkip(-5)}>⏮</button>
        <button className="control-button play-button" onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className="control-button" onClick={() => handleSkip(5)}>⏭</button>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current ? audioRef.current.currentTime : 0)}
        onEnded={() => setCurrentlyPlayingId(null)}
        onLoadedMetadata={() => setCurrentTime(0)}
      />

      <PlaybackList
        recordings={recordings}
        deleteRecording={deleteRecording}
        handlePlayFromList={handlePlayFromList}
        currentlyPlayingId={currentlyPlayingId}
      />
    </div>
  );
}

export default RecordApp;
