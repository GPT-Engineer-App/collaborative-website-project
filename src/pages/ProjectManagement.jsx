import React from 'react';

const ProjectManagement = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Project Management</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Project Templates</h2>
          <ul className="list-disc list-inside">
            <li>Template 1</li>
            <li>Template 2</li>
            <li>Template 3</li>
            <li>Template 4</li>
            <li>Template 5</li>
          </ul>
        </div>
        <div className="col-span-3 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">To Do</h2>
          <ul className="list-disc list-inside">
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
          <h2 className="text-xl font-bold mt-4">In Progress</h2>
          <ul className="list-disc list-inside">
            <li>Task 4</li>
            <li>Task 5</li>
          </ul>
          <h2 className="text-xl font-bold mt-4">Completed</h2>
          <ul className="list-disc list-inside">
            <li>Task 6</li>
            <li>Task 7</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;