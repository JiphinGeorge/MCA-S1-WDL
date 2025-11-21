import React, { useEffect, useState } from "react";
import API from "../api/api";
import WheelChart from "../components/Dashboard/WheelChart";
import ScoreSliders from "../components/Dashboard/ScoreSliders";

export default function DashboardPage() {
  const [categories, setCategories] = useState([]);
  const [scores, setScores] = useState({});

  const loadData = async () => {
    const catRes = await API.get("/categories");
    setCategories(catRes.data);

    const scoreRes = await API.get("/scores");
    const scoreMap = {};
    scoreRes.data.forEach((s) => (scoreMap[s.category_id] = s.score));
    setScores(scoreMap);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!categories.length) return <p>Loading dashboard...</p>;

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <h2>Life Progress Wheel</h2>
        <WheelChart categories={categories} scores={scores} />
      </div>

      <div style={{ flex: 1 }}>
        <ScoreSliders categories={categories} onSave={loadData} />
      </div>
    </div>
  );
}
