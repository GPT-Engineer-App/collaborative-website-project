import React, { useMemo, useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import EditDataForm from '../components/EditDataForm';
import AddDataForm from '../components/AddDataForm';
import DeleteConfirmation from '../components/DeleteConfirmation';

import { useTasks, useAddTask, useUpdateTask, useDeleteTask, useAddProject } from '../integrations/supabase/index.js';

const Dashboard = () => {
  const { data: tasks, refetch } = useTasks();
  const addTaskMutation = useAddTask();
  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();
  const addProjectMutation = useAddProject();

  const [selectedData, setSelectedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

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

  const handleSave = async (updatedData) => {
    if (isAdding) {
      await addTaskMutation.mutateAsync(updatedData);
    } else if (isEditing) {
      await updateTaskMutation.mutateAsync(updatedData);
    }
    refetch();
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleSaveProject = async (newProjectData) => {
    await addProjectMutation.mutateAsync(newProjectData);
    refetch();
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsAdding(false);
    setIsDeleting(false);
  };

  const handleConfirmDelete = async () => {
    await deleteTaskMutation.mutateAsync(selectedData.task_id);
    refetch();
    setIsDeleting(false);
  };

  useEffect(() => {
    refetch();
  }, [addTaskMutation.isSuccess, updateTaskMutation.isSuccess, deleteTaskMutation.isSuccess]);

  const filteredTasks = tasks?.filter(task => 
    task.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.meeting.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedTasks = useMemo(() => {
    const start = currentPage * pageSize;
    const end = start + pageSize;
    return filteredTasks?.slice(start, end);
  }, [filteredTasks, currentPage, pageSize]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome back, John! Here's a quick overview of your projects and tasks.</p>
      <div className="mt-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks and meetings..."
          className="p-2 border rounded mb-4"
        />
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add New
        </button>
        <DataTable columns={columns} data={paginatedTasks || []} />
        <div className="pagination mt-4">
          <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
            {'<<'}
          </button>{' '}
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
            {'<'}
          </button>{' '}
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredTasks.length / pageSize) - 1))} disabled={currentPage >= Math.ceil(filteredTasks.length / pageSize) - 1}>
            {'>'}
          </button>{' '}
          <button onClick={() => setCurrentPage(Math.ceil(filteredTasks.length / pageSize) - 1)} disabled={currentPage >= Math.ceil(filteredTasks.length / pageSize) - 1}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {currentPage + 1} of {Math.ceil(filteredTasks.length / pageSize)}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={currentPage + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                setCurrentPage(page);
              }}
              style={{ width: '100px' }}
              className="p-2 border rounded"
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="p-2 border rounded"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
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
          onSave={handleSaveProject}
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