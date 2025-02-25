// PlaybackList.js // Works for MP3 Download
// import React from 'react';

// const PlaybackList = ({ recordings, deleteRecording }) => {
//   const downloadRecording = (blob, filename) => {
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-2xl mt-6">
//       <h2 className="text-2xl font-extrabold text-indigo-600 mb-4">🎙️ Saved Recordings</h2>
//       {recordings.length === 0 ? (
//         <p className="text-gray-500 italic">No recordings yet. Start recording to see them here!</p>
//       ) : (
//         <div className="space-y-4">
//           {recordings.map((rec, index) => (
//             <div
//               key={rec.id}
//               className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
//             >
//               <audio controls src={URL.createObjectURL(rec.blob)} className="rounded-lg" />
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => downloadRecording(rec.blob, `recording-${index + 1}.mp3`)}
//                   className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors"
//                 >
//                   ⬇️ Download
//                 </button>
//                 <button
//                   onClick={() => deleteRecording(rec.id)}
//                   className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
//                 >
//                   ❌ Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaybackList;

// import React from 'react';

// const PlaybackList = ({ recordings, deleteRecording, onSelect }) => {
//   const downloadRecording = (blob, filename) => {
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-2xl mt-6">
//       <h2 className="text-2xl font-extrabold text-indigo-600 mb-4">🎙️ Saved Recordings</h2>
//       {recordings.length === 0 ? (
//         <p className="text-gray-500 italic">No recordings yet. Start recording to see them here!</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {recordings.map((rec, index) => (
//             <div
//               key={rec.id}
//               className="recording-item p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
//               onClick={() => onSelect(rec)}
//             >
//               <div className="recording-name text-lg font-semibold mb-2">Recording {index + 1}</div>
//               <audio controls src={URL.createObjectURL(rec.blob)} className="w-full mb-2" />
//               <div className="flex justify-between">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent selection when clicking download
//                     downloadRecording(rec.blob, `recording-${index + 1}.mp3`);
//                   }}
//                   className="download-button bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors"
//                 >
//                   ⬇️ Download
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent selection when clicking delete
//                     deleteRecording(rec.id);
//                   }}
//                   className="delete-button bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
//                 >
//                   ❌ Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaybackList;

//----------Works LIT
// PlaybackList.js
// import React from 'react';

// const PlaybackList = ({ recordings, deleteRecording }) => {
//   const downloadRecording = (blob, filename) => {
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-2xl mt-6">
//       <h2 className="text-2xl font-extrabold text-indigo-600 mb-4">🎙️ Saved Recordings</h2>
//       {recordings.length === 0 ? (
//         <p className="text-gray-500 italic">No recordings yet. Start recording to see them here!</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {recordings.map((rec, index) => (
//             <div
//               key={rec.id}
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow"
//             >
//               <h3 className="font-bold text-lg">🎧 Recording {index + 1}</h3>
//               <audio controls src={URL.createObjectURL(rec.blob)} className="mt-2 w-full rounded-lg" />
//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => downloadRecording(rec.blob, `recording-${index + 1}.mp3`)}
//                   className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-white"
//                 >
//                   ⬇️ Download
//                 </button>
//                 <button
//                   onClick={() => deleteRecording(rec.id)}
//                   className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full text-white"
//                 >
//                   ❌ Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaybackList;

// Updated PlaybackList.js
import React from 'react';

const PlaybackList = ({ recordings, deleteRecording, handlePlayFromList }) => {
  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl mt-6">
      <h2 className="text-2xl font-extrabold text-indigo-600 mb-4">🎙️ Saved Recordings</h2>
      {recordings.length === 0 ? (
        <p className="text-gray-500 italic">No recordings yet. Start recording to see them here!</p>
      ) : (
        <div className="space-y-4">
          {recordings.map((rec, index) => (
            <div
              key={rec.id}
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-white font-bold">Recording {index + 1}</div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handlePlayFromList(rec.blob)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full transition-colors"
                >
                  ▶ Play
                </button>
                <button
                  onClick={() => deleteRecording(rec.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
                >
                  ❌ Delete
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

