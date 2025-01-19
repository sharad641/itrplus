import React, { useState } from "react";
import "./SalaryManagement.css";

function SalaryManagement() {
  const [salary, setSalary] = useState("");
  const [deductions, setDeductions] = useState("");
  const [taxableIncome, setTaxableIncome] = useState(null);
  const [error, setError] = useState("");

  // Function to calculate taxable income
  const handleCalculate = (e) => {
    e.preventDefault();

    if (!salary || !deductions || salary <= 0 || deductions < 0) {
      setError("Please enter valid salary and deductions.");
      return;
    }

    const income = Math.max(0, salary - deductions);
    setTaxableIncome(income);
    setError(""); // Clear error
  };

  return (
    <div className="salary-management-container">
      <h2>Salary Management</h2>
      <form onSubmit={handleCalculate} className="salary-form">
        <div className="form-group">
          <label htmlFor="salary">Gross Salary (₹):</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deductions">Deductions (₹):</label>
          <input
            type="number"
            id="deductions"
            value={deductions}
            onChange={(e) => setDeductions(Number(e.target.value))}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="calculate-button">
          Calculate Taxable Income
        </button>
      </form>

      {taxableIncome !== null && (
        <div className="result">
          <h3>Taxable Income: ₹{taxableIncome.toLocaleString()}</h3>
          {taxableIncome === 0 ? (
            <p className="tax-saving-tip">
              Great! With your deductions, you don't have any taxable income.
            </p>
          ) : (
            <p className="tax-saving-tip">
              Tip: Invest in tax-saving instruments like ELSS, PPF, or NPS to reduce your taxable income further.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SalaryManagement;
