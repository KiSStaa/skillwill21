import React from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";


const Header = () => {
  const {doneList} = useSelector((state) => state.todo);
  return(
  <div>
<Link to = {'add'} style={{ marginRight: "10px" }} className="adnew">Add new task</Link>
<Link to = {'tasks'} style={{ marginRight: "10px" }} className="todo">TodoList</Link>
{doneList && <Link to = {'done'} className="done">Done tasks</Link>}
</div>)
}

export default Header;