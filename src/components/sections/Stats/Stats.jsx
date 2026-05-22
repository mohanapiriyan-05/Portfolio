import "./Stats.css";

const stats = [
  {
    number:"10+",
    title:"Projects Completed"
  },
  {
    number:"15+",
    title:"Technologies"
  },
  {
    number:"100%",
    title:"Responsive Design"
  },
  {
    number:"24/7",
    title:"Learning Mindset"
  }
];

export default function Stats(){

return(

<section className="stats">

<div className="stats-header">

<p>Achievements</p>

<h2>
Professional Statistics
</h2>

</div>

<div className="stats-grid">

{
stats.map((item)=>(

<div
className="stats-card"
key={item.title}
>

<h1>

{item.number}

</h1>

<p>

{item.title}

</p>

</div>

))
}

</div>

</section>

);

}