import React from "react";

function MyForm({
  bruCoffeeAmount,
  setBruCoffeeAmount,
  otherAmount,
  setOtherAmount,
  totalValue,
  setTotalValue,
  handleApply
}) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Convert entered values to numbers and calculate total
    const bruCoffee = parseInt(bruCoffeeAmount) || 0;
    const others = parseInt(otherAmount) || 0;
    const total = bruCoffee + others;

    // Set the total value in the parent state
    setTotalValue(total);

    // Call the handleApply function if provided
    handleApply && handleApply();
  };

  const handleReset = () => {
    // Reset the amounts and the total value to default
    setBruCoffeeAmount("");
    setOtherAmount("");
    setTotalValue(0); // Optional: reset the total value if needed
  };

  return (
    <div className="form-container">
      <h3>Enter Your Scheme</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h5>Dr Bru-Coffee</h5>
          <input
            type="text"
            placeholder="Enter your Amount"
            value={bruCoffeeAmount}
            onChange={(e) => setBruCoffeeAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <h5>Others</h5>
          <input
            type="text"
            placeholder="Enter your Amount"
            value={otherAmount}
            onChange={(e) => setOtherAmount(e.target.value)}
          />
        </div>

        <div className="form-buttons">
          <button type="submit">Apply</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: "10px" }}>
          Remove
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
