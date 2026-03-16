import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
];

export default function Gallery() {

  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-center font-serif text-3xl mb-10">Gallery</h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
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
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.08, y: -6 }}
            />
          ))}

        </motion.div>

        <AnimatePresence>

        {selected && (
          <motion.div
            className="fixed z-60 inset-0 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.button
              className="absolute top-10 right-10 text-white"
              onClick={() => setSelected(null)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <X size={40} />
            </motion.button>

            <motion.img
              src={selected}
              className="max-h-[80%] rounded-lg"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

          </motion.div>
        )}

        </AnimatePresence>

      </div>
    </section>
  );
}