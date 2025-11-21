import React, { useEffect, useState } from "react";
import API from "../../api/api";

export default function ScoreSliders({ categories, onSave }) {
  const [scores, setScores] = useState({});

  // Load existing scores
  useEffect(() => {
    (async () => {
      const res = await API.get("/scores");
      const map = {};
      res.data.forEach((item) => {
        map[item.category_id] = item.score;
      });
      setScores(map);
    })();
  }, []);

  const handleChange = (catId, value) => {
    setScores((prev) => ({ ...prev, [catId]: Number(value) }));
  };

  const handleSave = async () => {
    const items = categories.map((c) => ({
      category_id: c.id,
      score: scores[c.id] || 1,
    }));

    await API.post("/scores/bulk", { items });
    alert("Saved!");

    if (onSave) onSave();
  };

  if (!categories.length) return <p>Loading…</p>;

  return (
    <div>
      <h3>Update Scores</h3>

      {categories.map((cat) => (
        <div key={cat.id} style={{ marginBottom: "20px" }}>
          <label>
            <strong>{cat.name}</strong> — {scores[cat.id] || 1}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={scores[cat.id] || 1}
            onChange={(e) => handleChange(cat.id, e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      ))}

      <button
        onClick={handleSave}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Save All
      </button>
    </div>
  );
}
