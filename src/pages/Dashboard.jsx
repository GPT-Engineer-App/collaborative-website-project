import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome back, John! Here's a quick overview of your projects and tasks.</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Project A</h2>
          <p>A brief description of Project A. This project involves...</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Project B</h2>
          <p>A brief description of Project B. This project involves...</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Project C</h2>
          <p>A brief description of Project C. This project involves...</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View</button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Task Management</h2>
        <ul className="list-disc list-inside">
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Real-Time Updates</h2>
        <ul className="list-disc list-inside">
          <li>Update 1: Project A has a new milestone.</li>
          <li>Update 2: Task 2 in Project B is completed.</li>
          <li>Update 3: New files added to Project C.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;