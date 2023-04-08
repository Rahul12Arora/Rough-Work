import React, { useState } from "react";
import './todo.css'
function Todo() {
  const [message, setMessage] = useState("");
  const [datadisplay, setDatadisplay] = useState([]);
  const submitHandler = function (e) {
    e.preventDefault();
    //send data to backend
    const data = document.querySelector(".tododata").value;
    async function sendData() {
      console.log(data);
      const request = await fetch("http://localhost:5001/", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
      });
      setMessage("message sent to backend");
      document.getElementById("myForm").reset();
    }
    sendData();
  };

  async function handleGetData() {
    const response = await fetch("http://localhost:5001/", {
      method: "GET",
      headers: { "Content-Type": "text/plain" }
    })
      .then((dt) => {
        return dt.json();
      })
      .then((fdt) => {setDatadisplay(fdt)});
  }

  return (
    <div>
      <form id="myForm" onSubmit={submitHandler}>
        <label htmlFor="todo">Todo</label>
        <input name="tododata" className="tododata" />
        <button>Submit</button>
        <p>{message}</p>
      </form>
      <div>
        <button onClick={handleGetData}>Get Array</button>
        <div>{datadisplay}</div>
      </div>
      <div className="parent">
        Parent
        <div className="child1">child1</div>
        <div className="child2">child2</div>
        <div className="child3">child3</div>
      </div>
    </div>
  );
}

export default Todo;
