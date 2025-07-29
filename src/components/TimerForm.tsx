// File: src/components/TimerForm.tsx
"use client";
import { FC, useState } from "react";

const methods = [
  { key: "16:8", label: "16:8", desc: "16h fast, 8h eating", hours: 16 },
  { key: "18:6", label: "18:6", desc: "18h fast, 6h eating", hours: 18 },
  { key: "20:4", label: "20:4", desc: "20h fast, 4h eating", hours: 20 },
  { key: "OMAD", label: "OMAD", desc: "One meal a day", hours: 23 },
  { key: "24h", label: "24h", desc: "Full day fast", hours: 24 },
  { key: "36h", label: "36h", desc: "Extended fast", hours: 36 }
];

const TimerForm: FC = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [method, setMethod] = useState<string>(methods[0].key);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    // Clear previous results and errors
    setResult("");
    setError("");

    // Validation: Check if both date and time are selected
    if (!date || !time) {
      setError("Please select both date and time.");
      return;
    }

    try {
      // Combine date and time into a single Date object
      const lastMealDateTime = new Date(`${date}T${time}`);
      
      // Validate the date object
      if (isNaN(lastMealDateTime.getTime())) {
        setError("Invalid date or time selected.");
        return;
      }

      // Get the selected fasting method
      const selectedMethod = methods.find(m => m.key === method);
      if (!selectedMethod) {
        setError("Please select a fasting method.");
        return;
      }

      // Calculate when the fast will end
      const fastEndTime = new Date(lastMealDateTime.getTime() + (selectedMethod.hours * 60 * 60 * 1000));
      
      // Get current time for comparison
      const now = new Date();
      
      // Calculate remaining time
      const timeRemaining = fastEndTime.getTime() - now.getTime();
      
      if (timeRemaining > 0) {
        // Fast is still ongoing
        const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        
        setResult(`Your ${selectedMethod.label} fast will end at ${fastEndTime.toLocaleString()}. Time remaining: ${hoursRemaining}h ${minutesRemaining}m`);
      } else {
        // Fast is complete
        const timeComplete = Math.abs(timeRemaining);
        const hoursComplete = Math.floor(timeComplete / (1000 * 60 * 60));
        const minutesComplete = Math.floor((timeComplete % (1000 * 60 * 60)) / (1000 * 60));
        
        setResult(`Your ${selectedMethod.label} fast completed ${hoursComplete}h ${minutesComplete}m ago! You can break your fast now.`);
      }

    } catch (err) {
      setError("Error calculating fasting time. Please check your inputs.");
      console.error("Fasting calculation error:", err);
    }
  };

  // Check if form is valid for enabling the calculate button
  const isFormValid = date.trim() !== "" && time.trim() !== "";

  return (
    <section className="py-8 px-4 bg-blue-900 text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">When did you last eat?</h2>
      
      {/* Date and Time Inputs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <div className="flex flex-col">
          <label htmlFor="meal-date" className="text-sm mb-1 text-blue-200">Select date</label>
          <input 
            id="meal-date"
            type="date" 
            className="p-3 bg-blue-800 rounded-md text-white border border-blue-700 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20" 
            value={date} 
            onChange={e => setDate(e.target.value)}
            placeholder="Select date"
            max={new Date().toISOString().split('T')[0]} // Don't allow future dates
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="meal-time" className="text-sm mb-1 text-blue-200">Select time</label>
          <input 
            id="meal-time"
            type="time" 
            className="p-3 bg-blue-800 rounded-md text-white border border-blue-700 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20" 
            value={time} 
            onChange={e => setTime(e.target.value)}
            placeholder="Select time"
          />
        </div>
      </div>

      {/* Method Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
        {methods.map(m => (
          <button 
            key={m.key} 
            onClick={() => setMethod(m.key)} 
            className={`${
              method === m.key 
                ? "bg-yellow-400 text-black" 
                : "bg-blue-800 text-white hover:bg-blue-700"
            } p-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50`}
            type="button"
          >
            <div className="font-semibold text-lg">{m.label}</div>
            <div className="text-sm opacity-90">{m.desc}</div>
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-center mb-4">
          <p className="text-red-300 bg-red-900/20 border border-red-700 rounded-lg p-3 inline-block">
            {error}
          </p>
        </div>
      )}

      {/* Calculate Button */}
      <div className="text-center mb-6">
        <button 
          onClick={handleCalculate}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
            isFormValid 
              ? "bg-yellow-400 text-black hover:bg-yellow-300 cursor-pointer" 
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          type="button"
        >
          Calculate Fasting Time
        </button>
        {!isFormValid && (
          <p className="text-sm text-blue-200 mt-2">Please select both date and time</p>
        )}
      </div>

      {/* Result Display */}
      {result && (
        <div className="text-center">
          <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 inline-block max-w-2xl">
            <p className="text-green-300 font-medium">{result}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TimerForm;
