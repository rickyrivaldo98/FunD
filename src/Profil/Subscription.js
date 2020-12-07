import React from "react";
import axios from "axios";
// import Footer from "./Footer";

function Subscription(props) {
  const getData = () => {
    // axios
    //   .get("http://13.238.142.2/budgets")
    //   .then((res) => {
    //     console.log(res.data);
    //     setBudgetData(res.data);
    //   });

    axios("http://13.238.142.2/budgets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res.data);
      sessionStorage.setItem("budget.id", res.data.id);
      //   setBudgetData(res.data);
    });
  };

  return (
    <div>
      <h2>Subscribed</h2>
      <h2>A</h2>
    </div>
  );
}

export default Subscription;
