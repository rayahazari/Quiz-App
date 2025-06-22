import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePlayer } from '../utils/storage';

const categories = ['Science','Entertainment','History','Geography','Technology','Sports'];
const difficulties = ['Easy','Medium','Hard'];

export default function AddPlayerForm() {
  const [form, setForm] = useState({ name:'', category:'', difficulty:'' });
  const nav = useNavigate();

  const handle = e => setForm(f=>({ ...f, [e.target.name]: e.target.value }));
  const submit = () => {
    savePlayer(form);
    nav('/quiz/start');
  };

  return (
    <div className="form-container">
      <h2>Enter Your Details</h2>
      <input name="name" value={form.name} onChange={handle} placeholder="Your Name"/>
      <select name="category" value={form.category} onChange={handle}>
        <option value="">Select Category</option>
        {categories.map(c=> <option key={c}>{c}</option>)}
      </select>
      <select name="difficulty" value={form.difficulty} onChange={handle}>
        <option value="">Select Difficulty</option>
        {difficulties.map(d=> <option key={d}>{d}</option>)}
      </select>
      <button disabled={!form.name||!form.category||!form.difficulty} onClick={submit}>
        Start
      </button>
    </div>
  );
}
