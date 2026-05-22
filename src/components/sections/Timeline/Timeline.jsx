import "./Timeline.css";

const timeline = [
  {
    year: "2024",
    title: "Started Web Development",
    desc: "Learned HTML, CSS, JavaScript and basic responsive design."
  },
  {
    year: "2025",
    title: "React Development",
    desc: "Built modern frontend projects with reusable components and clean UI."
  },
  {
    year: "2026",
    title: "Full Stack Learning",
    desc: "Working with Node.js, Express, Supabase, MySQL and real project workflows."
  }
];

export default function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <div className="timeline-header">
        <p>Journey</p>
        <h2>Experience Timeline</h2>
      </div>

      <div className="timeline-wrapper">
        {timeline.map((item) => (
          <div className="timeline-item" key={item.year}>
            <div className="year">{item.year}</div>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}