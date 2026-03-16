import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery2() {

  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-5">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
          variants={{
            hidden:{},
            visible:{
              transition:{ staggerChildren:0.18 }
            }
          }}
        >

          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              onClick={() => setSelected(img)}
              className="cursor-pointer rounded-lg"
              variants={{
                hidden:{ opacity:0, y:40, scale:0.95 },
                visible:{ opacity:1, y:0, scale:1 }
              }}
              transition={{ duration:0.45 }}
              whileHover={{ scale:1.08, y:-6 }}
            />
          ))}

        </motion.div>

        <AnimatePresence>

        {selected && (
          <motion.div
            className="fixed z-60 inset-0 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >

            <motion.button
              className="absolute top-10 right-10 text-white"
              onClick={() => setSelected(null)}
              initial={{ scale:0 }}
              animate={{ scale:1 }}
              exit={{ scale:0 }}
              transition={{ type:"spring", stiffness:300 }}
            >
              <X size={40} />
            </motion.button>

            <motion.img
              src={selected}
              className="max-h-[80%] rounded-lg"
              initial={{ opacity:0, scale:0.85, y:60 }}
              animate={{ opacity:1, scale:1, y:0 }}
              exit={{ opacity:0, scale:0.85 }}
              transition={{ duration:0.4 }}
            />

          </motion.div>
        )}

        </AnimatePresence>

      </div>
    </section>
  );
}