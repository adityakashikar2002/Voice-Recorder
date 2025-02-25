//PlayList.js
import React from 'react';
const PlaybackList = ({
  recordings,
  deleteRecording,
  handlePlayFromList,
  currentlyPlayingId,
}) => {
  const downloadRecording = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 shadow-2xl rounded-2xl mt-6">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-green-500 via-green-300 to-teal-400 text-transparent bg-clip-text drop-shadow-lg mb-6 flex items-start justify-left space-x-3 rounded-xl p-4">
        <img
          src="/record.gif"
          alt="Microphone GIF"
          className="w-12 h-12 rounded-xl shadow-md"
        />
        <span className="tracking-wide">RECORDS</span>
      </h2>

      {recordings.length === 0 ? (
        <p className="text-gray-300 italic text-center">
          No recordings yet. Start recording to see them here!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...recordings].reverse().map((rec, index) => (
            <div
              key={rec.id}
              className="flex flex-col items-center space-y-4 p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-white font-bold text-lg">
                Recording {recordings.length - index}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handlePlayFromList(rec.blob, rec.id)}
                  className={`${
                    currentlyPlayingId === rec.id
                      ? 'bg-orange-500 hover:bg-orange-600'
                      : 'bg-green-500 hover:bg-green-600'
                  } text-white px-4 py-2 rounded-full transition-colors`}
                >
                  ▶ Play
                </button>
                <button
                  onClick={() =>
                    downloadRecording(
                      rec.blob,
                      `recording-${recordings.length - index}.mp3`
                    )
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Download
                </button>
                <button
                  onClick={() => deleteRecording(rec.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaybackList;