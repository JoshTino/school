import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {number:500,label:"Students"},
  {number:40,label:"Teachers"},
  {number:20,label:"Classrooms"},
  {number:10,label:"Years of .Excellence"},
];

export default function Stats(){

  return(
    <section className="py-16 bg-white flex justify-center">
      <div className="flex flex-wrap justify-between gap-y-4 w-11/12 md:w-8/12">

        {stats.map((stat,i)=>(
          <motion.div
          key={i}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          className="bg-maroon text-white rounded-full size-25 flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl font-bold text-white">
              <CountUp end={stat.number} duration={3}/>+
            </h2>

            <p className="mt-2 text-xs text-center text-white">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  )
}