import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import CrudOperations from './CrudOperations';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(user);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out successfully');
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">My App</span>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-medium">CRUD</span>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Welcome Text */}
            <div className="flex flex-col items-center mt-12">
                <h1 className="text-3xl font-semibold text-gray-800">Welcome {loggedInUser}</h1>
            </div>

            {/* Toast Container */}
            <ToastContainer />

            {/* CRUD Operations Section */}
            <div className="max-w-6xl mx-auto mt-8 p-4">
                <CrudOperations />
            </div>
        </div>
    );
}

export default Home;
