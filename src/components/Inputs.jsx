import React, { useState } from 'react';
import "./Inputs.css";

export function Inputs({ func, addCard }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const submit = () => {
    addCard(title, duration, date);
    setTitle("");
    setDuration("");
    setDate("");
  };

  return (
    <>
      <div className='mainInputs'>
        <div className="first">
          <h1>Title</h1>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="second">
          <h1>Duration (day)</h1>
          <input
            type="number"
            onChange={(e) => setDuration(parseInt(e.target.value))}
          />
        </div>
        <div className="third">
          <h1>Date</h1>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div className="twoButtons">
        <button onClick={submit}>Add</button>
        <button onClick={() => func()}>Cancel</button>
      </div>
    </>
  );
}