import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FlaskConical,
  Monitor,
  Library,
  Music,
  Volleyball,
  CircleChevronDown,
  Goal,
  School
} from "lucide-react"

const facilities = [
{
  title: "Science Laboratory",
  icon: FlaskConical,
  image: "/images/lab.jpg",
  description:
    "Fully equipped science laboratories supporting practical learning in Physics, Chemistry and Biology."
},
{
  title: "ICT Laboratory",
  icon: Monitor,
  image: "/images/ICT.jpg",
  description:
    "Modern computer laboratory providing students with digital literacy and CBT examination facilities."
},
{
  title: "Library",
  icon: Library,
  image: "/images/library.jpg",
  description:
    "A quiet academic library containing textbooks, reference materials and digital resources."
},
{
  title: "Modern Classrooms",
  icon: School,
  image: "/images/gallery5.jpg",
  description:
    "Spacious classrooms designed for comfortable learning with modern teaching tools."
},
{
  title: "Music Laboratory",
  icon: Music,
  image: "/images/music.jpg",
  description:
    "Dedicated music lab where students develop creativity through instruments and music theory."
},
{
  title: "Basketball Court",
  icon: Volleyball,
  image: "/images/basketball.jpg",
  description:
    "Outdoor basketball court used for sports development and inter-house competitions."
},
{
  title: "Badminton Court",
  icon: Volleyball,
  image: "/images/badminton.jpg",
  description:
    "Badminton facility supporting agility, coordination and competitive sports activities."
},
{
  title: "Football Field",
  icon: Goal,
  image: "/images/football.jpg",
  description:
    "Standard football field used for training, sports festivals and school tournaments."
},
{
  title: "Volleyball Court",
  icon: Volleyball,
  image: "/images/volleyball.jpg",
  description:
    "Dedicated volleyball court encouraging teamwork and athletic development."
}
]

export default function Facilities(){

const [openIndex,setOpenIndex] = useState(null)

return(

<section id="facilities" className="py-20 px-4 bg-gray-50">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-serif text-center mb-12">
Facilities
</h2>

<div className="grid md:grid-cols-3 gap-8">

{facilities.map((facility,i)=>{

const Icon = facility.icon
const isOpen = openIndex === i

return(

<motion.div
key={i}
layout
onClick={()=> setOpenIndex(isOpen ? null : i)}
whileHover={{ y:-6, scale:1.02 }}
transition={{ type:"spring", stiffness:200, damping:15 }}
className="cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
>

<div className="p-6 flex items-center justify-between">

<div className="flex items-center gap-4">

<Icon className="text-maroon" size={28}/>

<h3 className="font-semibold">
{facility.title}
</h3>

</div>

<motion.div
animate={{ rotate:isOpen ? 180 : 0 }}
transition={{ duration:0.35 }}
>

<CircleChevronDown className="text-gray-500"/>

</motion.div>

</div>

<AnimatePresence>

{isOpen && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
exit={{opacity:0,height:0}}
transition={{duration:0.45}}
className="px-6 pb-6"
>

<motion.img
src={facility.image}
alt={facility.title}
initial={{scale:0.95, opacity:0}}
animate={{scale:1, opacity:1}}
transition={{duration:0.4}}
className="rounded-lg mb-4 w-full h-40 object-cover"
/>

<motion.p
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:0.15}}
className="text-gray-600 text-sm"
>
{facility.description}
</motion.p>

</motion.div>

)}

</AnimatePresence>

</motion.div>

)

})}

</div>

</div>

</section>

)

}