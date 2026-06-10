import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Redux Todo App
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App