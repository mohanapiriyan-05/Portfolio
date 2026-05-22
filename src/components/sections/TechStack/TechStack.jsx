import "./TechStack.css";

const tech = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MySQL",
  "Supabase",
  "Cloudinary",
  "GitHub"
];

export default function TechStack() {
  return (
    <section className="tech">

      <p className="tech-title">
        TECHNOLOGIES I USE
      </p>

      <div className="tech-slider">

        <div className="slide-track">

          {[...tech,...tech].map((item,index)=>(

            <div
              className="tech-card"
              key={index}
            >

              {item}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}