import React from "react";

const TimerForm: React.FC = () => (
  <section className="my-8">
    <h2 className="text-xl font-bold mb-4">Calculate Fasting Time</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="lastMeal" className="block mb-1">When did you last eat?</label>
        <input type="datetime-local" id="lastMeal" name="lastMeal" className="border rounded px-2 py-1 w-full" />
      </div>
      <div>
        <label htmlFor="method" className="block mb-1">Choose your fasting method:</label>
        <select id="method" name="method" className="border rounded px-2 py-1 w-full">
          <option value="16:8">16:8</option>
          <option value="18:6">18:6</option>
          <option value="20:4">20:4</option>
          <option value="OMAD">OMAD</option>
          <option value="24h">24h</option>
          <option value="36h">36h</option>
        </select>
      </div>
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">🕐 Calculate Fasting Time</button>
    </form>
  </section>
);

export default TimerForm;
