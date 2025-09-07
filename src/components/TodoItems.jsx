import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isCompleted, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-2 sm:my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          src={isCompleted ? tick : not_tick}
          alt="icon"
          className="w-5 sm:w-6 md:w-7"
        />

        {/* Task Text */}
        <p
          className={`ml-3 sm:ml-4 text-sm sm:text-base md:text-[18px] ${
            isCompleted ? "line-through text-slate-400" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete icon"
        className="w-4 sm:w-5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
