import { DndContext } from "@dnd-kit/core";
import Column from "./Column";

export default function Board({ tasks, setTasks }) {

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    setTasks(prev =>
      prev.map(task =>
        task.id === active.id
          ? { ...task, status: over.id }
          : task
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        <Column title="To Do" id="todo" tasks={tasks} setTasks={setTasks} />
        <Column title="In Progress" id="progress" tasks={tasks} setTasks={setTasks} />
        <Column title="Done" id="done" tasks={tasks} setTasks={setTasks} />
      </div>
    </DndContext>
  );
}
