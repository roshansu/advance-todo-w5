import { useState, useEffect } from "react";
import Board from "./components/Board";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Kanban Task Board
      </h1>

      <div className="max-w-6xl mx-auto">
        <SearchBar search={search} setSearch={setSearch} />
        <Board tasks={filteredTasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
