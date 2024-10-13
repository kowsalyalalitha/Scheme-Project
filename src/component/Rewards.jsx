import React, { useState, useEffect } from "react";
import BorderText from "./BorderText";
import MyForm from "./MyForm";

function RewardApp() {
  const [activeTab, setActiveTab] = useState("Brounze");
  const [bruCoffeeAmount, setBruCoffeeAmount] = useState(0);
  const [otherAmount, setOtherAmount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [rewardMessage, setRewardMessage] = useState("");

  // Background color for reward message based on the total value
  const getBackgroundColor = () => {
    if (totalValue >= 400000) return "#FFD700"; // Gold
    if (totalValue >= 250000) return "#C0C0C0"; // Silver
    if (totalValue >= 150000) return "#CD7F32"; // Brounze
    return "#fff"; // Default white background
  };

  // Automatically switch tabs and set reward messages based on total value
  useEffect(() => {
    if (totalValue >= 150000 && totalValue < 250000) {
      setActiveTab("Sliver");
      setRewardMessage("Congratulations! You've unlocked the Brounze reward of ₹10,000.");
    }
    if (totalValue >= 250000 && totalValue < 400000) {
      setActiveTab("Gold");
      setRewardMessage("Congratulations! You've unlocked the Silver reward of ₹25,000.");
    }
    if (totalValue >= 400000) {
      setRewardMessage("Congratulations! You've unlocked the Gold reward of ₹60,000.");
    }
  }, [totalValue]);

  return (
    <div>
      <MyForm
        bruCoffeeAmount={bruCoffeeAmount}
        setBruCoffeeAmount={setBruCoffeeAmount}
        otherAmount={otherAmount}
        setOtherAmount={setOtherAmount}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        handleApply={() => console.log("Applied!")}
      />

      {/* Dynamic reward message background */}
      <div
        className="reward-message"
        style={{
          backgroundColor: getBackgroundColor(), // Set background color dynamically
          padding: "20px",
          borderRadius: "10px",
          margin: "20px 0",
          color: "#000", // Text color
          textAlign: "center",
        }}
      >
        <h3>{rewardMessage}</h3>
      </div>

      <BorderText
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalValue={totalValue}
        bruCoffeeAmount={bruCoffeeAmount}
        otherAmount={otherAmount}
      />
    </div>
  );
}

export default RewardApp;
