import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if(!input) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mb-6">
      <input
        type="text"
        className="flex-1 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none px-4 py-1"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
