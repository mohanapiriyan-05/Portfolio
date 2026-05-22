import "./Achievements.css";

const achievements = [
  "Completed Multiple Full Stack Projects",
  "Built Responsive UI Designs",
  "Hands-on Experience with React + Node",
  "Database Integration Projects"
];

export default function Achievements() {
  return (
    <section className="achievements">
      <div className="achievement-header">
        <p>Achievements</p>
        <h2>Key Highlights</h2>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <span>0{index + 1}</span>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}