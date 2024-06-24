import React from 'react';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <p className="mb-4">Are you sure you want to delete this item?</p>
      <div className="flex justify-end space-x-4">
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
        <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;