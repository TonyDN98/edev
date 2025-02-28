// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import PostDetails from './pages/PostDetails';
// import RequireAuth from './context/AuthGuard';
//
// const App: React.FC = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <RequireAuth>
//                             <Home />
//                         </RequireAuth>
//                     }
//                 />
//                 <Route
//                     path="/post/:id"
//                     element={
//                         <RequireAuth>
//                             <PostDetails />
//                         </RequireAuth>
//                     }
//                 />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//             </Routes>
//         </Router>
//     );
// };
//
// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importăm Footer-ul
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetails from './pages/PostDetails';
import RequireAuth from './context/AuthGuard';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/post/:id"
                            element={
                                <RequireAuth>
                                    <PostDetails />
                                </RequireAuth>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
                <Footer /> {/* Adăugăm Footer-ul */}
            </div>
        </Router>
    );
};

export default App;
