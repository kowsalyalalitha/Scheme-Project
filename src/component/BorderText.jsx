import React, { useEffect } from "react";

function BorderText({
  activeTab,
  setActiveTab,
  totalValue,
  bruCoffeeAmount,
  otherAmount,
  rewardMessage,
  setRewardMessage
}) {
  useEffect(() => {
    // Automatically switch to Silver tab when totalValue reaches 150,000
    if (totalValue >= 150000 && activeTab === "Brounze") {
      setActiveTab("Sliver");
      setRewardMessage("Congratulations! You've unlocked the Brounze reward of ₹10,000.");
    }
    // Automatically switch to Gold tab when totalValue reaches higher thresholds
    if (totalValue >= 250000 && activeTab === "Sliver") {
      setActiveTab("Gold");
      setRewardMessage("Congratulations! You've unlocked the Silver reward of ₹25,000.");
    }
    if (totalValue >= 400000 && activeTab === "Gold") {
      setRewardMessage("Congratulations! You've unlocked the Gold reward of ₹60,000.");
    }
  }, [totalValue, activeTab, setActiveTab, setRewardMessage]);

  return (
    <div className="tab-container">
      <button
        className={activeTab === "Brounze" ? "active-tab" : ""}
        onClick={() => setActiveTab("Brounze")}
      >
        Brounze
      </button>
      <button
        className={activeTab === "Sliver" ? "active-tab" : ""}
        onClick={() => setActiveTab("Sliver")}
      >
        Sliver
      </button>
      <button
        className={activeTab === "Gold" ? "active-tab" : ""}
        onClick={() => setActiveTab("Gold")}
      >
        Gold
      </button>

      <div className="border-container">
        {activeTab === "Brounze" && (
          <div className="voucher-item">
            <h3>Brounze</h3>
            <p className="vouchers-css">Gift Voucher ₹10,000</p>
          </div>
        )}

        {activeTab === "Sliver" && (
          <div className="voucher-items">
            <h3>Sliver</h3>
            <p className="vouchers-css">Gift Voucher ₹25,000</p>
          </div>
        )}

        {activeTab === "Gold" && (
          <div className="vouchers-item">
            <h3>Gold</h3>
            <p className="vouchers-css">Gift Voucher ₹60,000</p>
          </div>
        )}

        {/* Total Value and Rewards */}
        <div className="d-flex justify-content-between align-items-center value-list-container">
          <div className="leftside-list">
            <ul>
              <li className="tick">Total Value</li>
              <li className="tick">Dr Grow Coffee</li>
              <li className="tick">Others</li>
            </ul>
          </div>
          <div className="amount-items">
            <ul>
              <li>{`₹${totalValue} / ₹150,000`}</li>
              <li>{`₹${bruCoffeeAmount} / ₹30,000`}</li>
              <li>{`₹${otherAmount} / ₹150,000`}</li>
            </ul>
          </div>
        </div>

        {/* Display reward message if any */}
        {rewardMessage && (
          <div className="reward-message">
            <p>{rewardMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BorderText;
