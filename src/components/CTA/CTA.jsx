import { motion } from "framer-motion";
import { toast } from "react-toastify";

const CTA = () => {

    const handleSubscriptions = (e) => {
        e.preventDefault()
         e.target.name.value;
         e.target.email.value;
        toast.success("Subscribed!")
         e.target.name.value = ""
        e.target.email.value =""
    }


  return (
    <section className="bg-[#CBCBCB] dark:bg-[#2f3028] py-24 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="bg-white dark:bg-[#1f1f1f] rounded-md py-16 px-6 text-center shadow-sm transition-colors">
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 dark:text-gray-100">
            Subscribe Our Newsletter
          </h2>

          {/* Form */}
          <form onSubmit={handleSubscriptions} className="mt-10 flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center">
              
              <input
                required
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full md:w-72 px-4 py-3 border border-gray-200 dark:border-gray-700
                bg-transparent dark:text-gray-100 rounded
                focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
              />

              <input
              required
              name="email"
                type="email"
                placeholder="Your email"
                className="w-full md:w-72 px-4 py-3 border border-gray-200 dark:border-gray-700
                bg-transparent dark:text-gray-100 rounded
                focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#B7B89F] rounded
                text-white font-medium shadow-md
                hover:bg-[#B7B89F] dark:hover:bg-gray-500 transition"


              >
                Subscribe
              </motion.button>
            </div>

            {/* Checkbox */}
            <label className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <input
                type="checkbox"
                className="accent-gray-600 dark:accent-gray-400"
              />
              I GM markets principles
            </label>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
