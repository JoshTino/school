import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/gallery1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "url('/images/gallery1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative max-w-3xl px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }
          }
        }}
      >

        <motion.h1
          className="font-serif text-5xl mb-6"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7 }}
        >
          Welcome To Treasure Field College
        </motion.h1>

        <motion.p
          className="mb-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          A centre of academic excellence, discipline, and character development.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >

          <motion.a
            href="https://wa.me/09131434467"
            className="bg-maroon cursor-pointer px-6 py-3 rounded-lg hover:bg-red-900"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Admission
          </motion.a>

          <motion.a
            href="tel:0913 143 4467"
            className="bg-green-700 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>

        </motion.div>

      </motion.div>
    </section>
  );
}