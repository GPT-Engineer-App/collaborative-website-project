import React, { useMemo, useState } from 'react';
import DataTable from '../components/DataTable';
import EditDataForm from '../components/EditDataForm';
import AddDataForm from '../components/AddDataForm';
import DeleteConfirmation from '../components/DeleteConfirmation';

const Dashboard = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
          <div className="space-x-2">
            <button
              onClick={() => handleEdit(row.original)}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(row.original)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (data) => {
    setSelectedData(data);
    setIsEditing(true);
  };

  const handleDelete = (data) => {
    setSelectedData(data);
    setIsDeleting(true);
  };

  const handleSave = (updatedData) => {
    // Update the data state with the edited data
    // This is a placeholder logic, you should replace it with actual update logic
    console.log('Updated Data:', updatedData);
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsAdding(false);
    setIsDeleting(false);
  };

  const handleConfirmDelete = () => {
    // Delete the selected data
    // This is a placeholder logic, you should replace it with actual delete logic
    console.log('Deleted Data:', selectedData);
    setIsDeleting(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome back, John! Here's a quick overview of your projects and tasks.</p>
      <div className="mt-8">
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add New
        </button>
        <DataTable columns={columns} data={data} />
      </div>
      {isEditing && (
        <EditDataForm
          selectedData={selectedData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {isAdding && (
        <AddDataForm
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {isDeleting && (
        <DeleteConfirmation
          onConfirm={handleConfirmDelete}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Dashboard;