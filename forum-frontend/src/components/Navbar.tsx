// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
//
// const Navbar: React.FC = () => {
//     const navigate = useNavigate();
//     const token = localStorage.getItem('token');
//
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/login');
//     };
//
//     return (
//         <nav className="bg-blue-500 text-white p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link to="/" className="text-2xl font-bold hover:text-gray-200">
//                     Forum
//                 </Link>
//                 <div className="flex items-center space-x-4">
//                     {!token ? (
//                         <>
//                             <Link to="/login" className="hover:text-gray-200">
//                                 Login
//                             </Link>
//                             <Link to="/register" className="hover:text-gray-200">
//                                 Register
//                             </Link>
//                         </>
//                     ) : (
//                         <>
//                             <button
//                                 onClick={handleLogout}
//                                 className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-gray-200">
                    Forum
                </Link>

                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:flex md:items-center space-x-4`}
                >
                    {!token ? (
                        <>
                            <Link to="/login" className="hover:text-gray-200">
                                Login
                            </Link>
                            <Link to="/register" className="hover:text-gray-200">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
