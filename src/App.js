// // App.js
// import React, { useEffect, useState } from "react";
// // import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./components/login";
// import SignUp from "./components/register";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import RecordApp from "./RecordApp";
// import { auth } from "./components/firebase";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route
//                 path="/"
//                 element={user ? <Navigate to="/app" /> : <Login />}
//               />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<SignUp />} />
//               <Route path="/app" element={<RecordApp />} />
//             </Routes>
//             <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecordApp from "./RecordApp";
import { auth } from "./components/firebase";

function AppWrapper() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Conditionally apply class based on route
  const isRecordApp = location.pathname === "/app";

  return (
    <div className={isRecordApp ? "record-mode" : "App"}>
      <div className={isRecordApp ? "record-mode" : "auth-wrapper"}>
        <div className={isRecordApp ? "record-mode" : "auth-inner"}>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/app" /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/app" element={<RecordApp />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
