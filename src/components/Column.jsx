import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

export default function Column({ title, id, tasks, setTasks }) {
  const { setNodeRef } = useDroppable({ id });
  const columnTasks = tasks.filter(task => task.status === id);

  return (
    <div
      ref={setNodeRef}
      className="bg-white rounded-2xl shadow-lg p-4 min-h-[400px]"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        {title}
      </h2>

      {id === "todo" && <AddTask setTasks={setTasks} />}

      <div className="space-y-3 mt-4">
        {columnTasks.map(task => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
}
