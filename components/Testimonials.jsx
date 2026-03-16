import { motion } from "framer-motion"

const testimonials=[
{
quote:"Treasure Field College transformed my child academically.",
name:"Mrs. Ibrahim",
role:"Parent"
},
{
quote:"Excellent teachers and facilities.",
name:"Samuel Danladi",
role:"Student"
},
{
quote:"The discipline and moral training are outstanding.",
name:"Mr. Musa",
role:"Parent"
}
]

export default function Testimonials(){

return(

<section className="py-20 bg-white">

	<h2 className="text-3xl font-bold text-center mb-5">
          Testimonials
     </h2>

<motion.div
className="max-w-6xl px-4 mx-auto grid md:grid-cols-3 gap-8"
initial="hidden"
whileInView="visible"
viewport={{ once:false, amount:0.2 }}
variants={{
hidden:{},
visible:{
transition:{ staggerChildren:0.2 }
}
}}
>

{testimonials.map((t,i)=>(
<motion.div
key={i}
className="bg-white p-6 border-b-4 border-maroon rounded-xl shadow"
variants={{
hidden:{ opacity:0, y:40 },
visible:{ opacity:1, y:0 }
}}
transition={{ duration:0.5 }}
whileHover={{ y:-8, scale:1.03 }}
>

<p className="italic mb-4">
"{t.quote}"
</p>

<h4 className="font-semibold">
{t.name}
</h4>

<span className="text-sm text-gray-500">
{t.role}
</span>

</motion.div>
))}

</motion.div>

</section>

)

}