// Test script to verify fasting calculation logic

// Test case 1: 16:8 fasting starting at 8:00 PM
const testDate = "2025-01-29";
const testTime = "20:00";
const testMethod = { key: "16:8", hours: 16 };

// Create start time
const startTime = new Date(`${testDate}T${testTime}`);
console.log("Start time:", startTime.toLocaleString());

// Calculate end time (16 hours later)
const endTime = new Date(startTime.getTime() + (testMethod.hours * 60 * 60 * 1000));
console.log("End time:", endTime.toLocaleString());

// Expected: January 30, 2025 at 12:00 PM (noon)
console.log("Expected: January 30, 2025 at 12:00 PM");

// Test case 2: Check if calculation is correct
const expectedEndHour = 12; // 8 PM + 16 hours = 12 PM next day
const actualEndHour = endTime.getHours();
console.log("Test passed:", actualEndHour === expectedEndHour);
