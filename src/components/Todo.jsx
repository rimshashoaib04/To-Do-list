import React, { useRef, useState, useEffect } from "react";
import todo from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

  const inputRef = useRef(null);

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div
      className="relative bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.2)] text-white 
      w-11/12 sm:w-10/12 md:w-3/4 lg:w-[500px] max-w-full 
      flex flex-col p-5 sm:p-7 rounded-xl animate-glow 
      h-[70vh] sm:h-[600px]"
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 shrink-0">
        <img src={todo} alt="icon" className="w-6 sm:w-8" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          To-Do List
        </h1>
      </div>

      {/* Input */}
      <div className="flex items-center mb-4 sm:mb-6 bg-gray-200 rounded-full w-full shrink-0">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 
      h-10 sm:h-12 pl-4 sm:pl-6 pr-2 
      placeholder:text-gray-400 text-black 
      text-base sm:text-lg font-medium rounded-l-full"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="h-10 sm:h-12 min-w-[90px] sm:min-w-[110px] 
      px-4 sm:px-6 font-bold text-white 
      bg-gradient-to-r from-cyan-500 to-blue-500 
      hover:from-blue-500 hover:to-cyan-500 
      transition-all rounded-full 
      text-base sm:text-lg cursor-pointer"
        >
          Add +
        </button>
      </div>

      {/* To-do list (scrollable) */}
      <div className="w-full flex-1 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
        {todoList.map((item, index) => (
          <TodoItems
            key={index}
            text={item.text}
            id={item.id}
            isCompleted={item.isCompleted}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
