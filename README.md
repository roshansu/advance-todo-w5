# 🚀 Kanban Task Board (React + Vite + Tailwind + Drag & Drop)

A modern **Trello-like Kanban Task Management Board** built using **React.js**, **Vite**, **TailwindCSS**, and **dnd-kit** for drag-and-drop functionality.

This project demonstrates the **React way of thinking** — managing UI through state instead of directly manipulating the DOM.

---

## ✨ Features

### 🧩 Core Functionality

* Add new tasks
* Delete tasks
* Move tasks across columns
* Three workflow columns:

  * To Do
  * In Progress
  * Done

### 🎯 Productivity Enhancements

* Edit task inline (click to edit)
* Task priority system

  * High → Red border
  * Medium → Yellow border
  * Low → Green border

### 💾 Persistence

* Tasks saved to **localStorage**
* Data remains after page refresh

### 🖱️ Drag and Drop

* Smooth drag-and-drop between columns
* Built using **dnd-kit**

### 🔍 Search & Filter

* Real-time task search
* Filters tasks by name

### 🎨 Modern UI

* Responsive layout
* TailwindCSS styling
* Clean card-based design

---

## 🛠️ Tech Stack

| Technology   | Purpose                      |
| ------------ | ---------------------------- |
| React.js     | Component-based UI           |
| Vite         | Fast development environment |
| TailwindCSS  | Utility-first styling        |
| dnd-kit      | Drag and drop system         |
| localStorage | Client-side persistence      |

---

## 📂 Project Structure

```
src/
 ├── components/
 │     ├── Board.jsx
 │     ├── Column.jsx
 │     ├── TaskCard.jsx
 │     ├── AddTask.jsx
 │     └── SearchBar.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```
