import React, { useMemo, useState } from 'react';
import DataTable from '../components/DataTable';
import EditDataForm from '../components/EditDataForm';

const Dashboard = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <button
            onClick={() => handleEdit(row.original)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        ),
      },
    ],
    []
  );

  const handleEdit = (data) => {
    setSelectedData(data);
    setIsEditing(true);
  };

  const handleSave = (updatedData) => {
    // Update the data state with the edited data
    // This is a placeholder logic, you should replace it with actual update logic
    console.log('Updated Data:', updatedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome back, John! Here's a quick overview of your projects and tasks.</p>
      <div className="mt-8">
        <DataTable columns={columns} data={data} />
      </div>
      {isEditing && (
        <EditDataForm
          selectedData={selectedData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Dashboard;