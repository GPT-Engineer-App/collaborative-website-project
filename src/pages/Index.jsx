import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons

const Index = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">
        Welcome to Faving! <FaPlus />
      </h1>
      <p className="mt-4">
        Faving is a collaborative platform designed for efficient project management and team collaboration. It features user-friendly task management, real-time updates, customizable project templates, and integrated communication tools, all aimed at enhancing productivity and teamwork.
      </p>
    </div>
  );
};

export default Index;