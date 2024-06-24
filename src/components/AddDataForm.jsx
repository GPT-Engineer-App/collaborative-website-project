import React, { useState } from 'react';

const AddDataForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    task: '',
    project: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== 'meeting') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { meeting, ...dataToSave } = formData;
    onSave(dataToSave);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Task</label>
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Project</label>
        <input
          type="text"
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddDataForm;