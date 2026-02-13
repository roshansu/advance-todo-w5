import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function TaskCard({ task, setTasks }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.title);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const priorityColor =
    task.priority === "high"
      ? "border-red-500"
      : task.priority === "medium"
      ? "border-yellow-400"
      : "border-green-500";

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  const saveEdit = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, title: text } : t
      )
    );
    setEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-gray-50 p-3 rounded-xl shadow border-l-4 ${priorityColor}`}
    >
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab active:cursor-grabbing text-xs text-gray-400 mb-1"
      >
        Drag
      </div>

      {editing ? (
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 p-1 border rounded"
          />
          <button
            onClick={saveEdit}
            className="text-sm bg-green-500 text-white px-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <p
          onClick={() => setEditing(true)}
          className="text-gray-800 font-medium"
        >
          {task.title}
        </p>
      )}

      <button
        type="button"
        onClick={deleteTask}
        className="mt-2 text-sm text-red-500 hover:text-red-700"
      >
        ✕ Delete
      </button>
    </div>
  );
}
