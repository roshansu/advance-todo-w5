import { useState } from "react";

export default function AddTask({ setTasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleAdd = () => {
    if (!title.trim()) return;

    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        priority,
        status: "todo"
      }
    ]);

    setTitle("");
  };

  return (
    <div className="space-y-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
