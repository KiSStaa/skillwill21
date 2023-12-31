import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodoAction, markDoneAction } from "../store/todo/todo.actions";

const Tasks = () => {
const {todoList, status} = useSelector((state) => state.todo)
const dispatch = useDispatch();

return (
<div>
<h2 className="tasks">Tasks</h2>
{todoList.map((item) => 
<div key = {item}>
<p>{item}</p>
<p>status: {status}</p>
<button onClick={() => dispatch(deleteTodoAction(item))} className="del">delete</button>
<button onClick={() => dispatch(markDoneAction(item))} className="mark">Mark as done</button>
</div>
)}
</div>
);
}

export default Tasks;