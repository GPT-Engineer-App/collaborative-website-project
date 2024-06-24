import React, { useMemo, useState } from 'react';
import DataTable from '../components/DataTable';
import AddDataForm from '../components/AddDataForm';

const Dashboard = () => {
  const [data, setData] = useState([
    {
      type: 'task',
      name: 'Task 1',
      description: 'Description for Task 1',
      date: '2023-10-01',
    },
    {
      type: 'meeting',
      name: 'Meeting 1',
      description: 'Description for Meeting 1',
      date: '2023-10-02',
    },
    {
      type: 'project',
      name: 'Project A',
      description: 'Description for Project A',
      date: '2023-10-03',
    },
  ]);

  const columns = useMemo(
    () => [
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
    ],
    []
  );

  const handleAddData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome back, John! Here's a quick overview of your projects and tasks.</p>
      <div className="mt-8">
        <AddDataForm onAdd={handleAddData} />
      </div>
      <div className="mt-8">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;