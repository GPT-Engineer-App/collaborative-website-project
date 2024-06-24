import React from 'react';

const TaskProgress = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Task Progress</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">My tasks</h2>
          <ul className="list-disc list-inside">
            <li>Discussion on new features - Due today</li>
            <li>Product launch brainstorming - Due tomorrow</li>
            <li>Marketing strategy review - Due today</li>
          </ul>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View all tasks</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Upcoming deadlines</h2>
          <ul className="list-disc list-inside">
            <li>Product design review - 10:00-11:00</li>
            <li>Client Meeting - 13:00-14:00</li>
            <li>Team brainstorming - 14:00-15:30</li>
            <li>Team Meeting - 09:30-11:00</li>
            <li>Weekly project review - 15:00-16:30</li>
          </ul>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View full schedule</button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Total hours worked</h2>
        <div className="bg-white p-4 rounded shadow">
          <p>Graph showing total hours worked</p>
        </div>
      </div>
    </div>
  );
};

export default TaskProgress;