import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Faving</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/project-management" className="hover:underline">Project Management</Link>
          <Link to="/task-progress" className="hover:underline">Task Progress</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;