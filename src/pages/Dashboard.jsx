import React, { useMemo, useState } from 'react';
import DataTable from '../components/DataTable';
import DeleteConfirmation from '../components/DeleteConfirmation';

const Dashboard = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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
            onClick={() => handleDelete(row.original)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        ),
      },
    ],
    []
  );

  const handleDelete = (item) => {
    setItemToDelete(item);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    // Logic to delete the item
    console.log('Deleting item:', itemToDelete);
    setIsDeleteOpen(false);
    setItemToDelete(null);
  };

  const closeDelete = () => {
    setIsDeleteOpen(false);
    setItemToDelete(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome back, John! Here's a quick overview of your projects and tasks.</p>
      <div className="mt-8">
        <DataTable columns={columns} data={data} />
      </div>
      <DeleteConfirmation
        isOpen={isDeleteOpen}
        onClose={closeDelete}
        onConfirm={confirmDelete}
        item={itemToDelete ? itemToDelete.task || itemToDelete.meeting : ''}
      />
    </div>
  );
};

export default Dashboard;