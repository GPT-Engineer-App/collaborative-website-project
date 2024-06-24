import React from 'react';

const SortControls = ({ onSortChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => onSortChange('task')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sort by Task
      </button>
      <button
        onClick={() => onSortChange('meeting')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sort by Meeting
      </button>
      <button
        onClick={() => onSortChange('project')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sort by Project
      </button>
    </div>
  );
};

export default SortControls;