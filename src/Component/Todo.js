import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Logo from "./Images/logo.png"
import "../style.css"


const TodoApp = () => {
  const [todo, setTodo] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [indexValue, setIndexValue] = useState("");

  const [editInputValue, setEditInputValue] = useState("");


  const addTodo = () => {
    console.log(inputValue);
    todo.push(inputValue);
    setTodo([...todo]);
    setInputValue("");
  };

  const deleteAll = () => {
    setTodo([]);
  };

  const deleteTodo = (ind) => {
    console.log("hello", ind);
    todo.splice(ind, 1);
    setTodo([...todo]);
  };

  const editTodo = (ind) => {
    
    console.log(ind);
    setIndexValue(ind);
  };

  const updateValue = () => {
    console.log(editInputValue);
    todo.splice(indexValue, 1, editInputValue);
    setTodo([...todo]);
    setIndexValue("");
    setEditInputValue("");
  };


  return (
    <div className="Mainbox">
      <h1 className="text-center mt-5">
        <img src={Logo} alt="" />
        <BiEdit color="#01A0C7" size={90} />
      </h1>
      <div className="w-50 mx-auto">
        <input
          type="text"
          value={inputValue}
          placeholder="ENTER TODO..."
          className="my-5 form-control input-group input1"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-outline-dark mx-5 btn1" onClick={addTodo}>
          ADD TODO
        </button>
        <button className="btn btn-outline-dark btn1" onClick={deleteAll}>
          DELETE ALL TODO'S
        </button>
      </div>


      <section className="container">
        {todo.map((value, index, array) => {
          return index === indexValue ? (
            <>
              <input
                key={index}
                placeholder="edit value"
                value={editInputValue}
                className="mt-3 input-group w-50 form-control d-inline-block mx-3 input1"
                onChange={(e) => setEditInputValue(e.target.value)}
              />
              <button className="btn btn-outline-dark btn1" onClick={updateValue}>
                update
              </button>
            </>
          ) : (
            <div key={index} className="mt-3">
              <li className="w-50  d-inline-block mx-3"> {value} </li>
              <span onClick={() => deleteTodo(index)}>
                <AiFillDelete size={50} />
              </span>
              {/* <button className="btn btn-info">EDIT</button> */}
              <span onClick={() => editTodo(index)}>
                <BiEdit  size={50} />
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TodoApp;