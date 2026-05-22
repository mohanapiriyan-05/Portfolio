import "./Awards.css";

const awards = [
  {
    year:"2025",
    title:"Best Web Project"
  },

  {
    year:"2025",
    title:"Frontend Development"
  },

  {
    year:"2026",
    title:"Full Stack Learning"
  }
];

export default function Awards(){

return(

<section className="awards">

<div className="award-header">

<p>Recognition</p>

<h2>
Awards & Achievements
</h2>

</div>

<div className="award-grid">

{

awards.map((award,index)=>(

<div
className="award-card"
key={index}
>

<span>

{award.year}

</span>

<h3>

{award.title}

</h3>

</div>

))

}

</div>

</section>

)

}