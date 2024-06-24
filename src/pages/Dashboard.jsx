import React, { useMemo } from 'react';
import DataTable from '../components/DataTable';

const Dashboard = () => {
  const data = useMemo(
    () => [
      {
        task: 'Task 1',
        meeting: 'Meeting 1',
        project: 'Project A',
      },
      {
        task: 'Task 2',
        meeting: 'Meeting 2',
        project: 'Project B',
      },
      {
        task: 'Task 3',
        meeting: 'Meeting 3',
        project: 'Project C',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Task',
        accessor: 'task',
      },
      {
        Header: 'Meeting',
        accessor: 'meeting',
      },
      {
        Header: 'Project',
        accessor: 'project',
      },
    ],
    []
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome back, John! Here's a quick overview of your projects and tasks.</p>
      <div className="mt-8">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;