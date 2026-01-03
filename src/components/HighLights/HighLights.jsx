import { FaDog, FaShoppingCart, FaUsers } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const HighLights = () => {
  return (
    <section className=" py-20 px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
         <SectionTitle title="Why PawMart?" subtitle="Everything pet lovers need — adoption, shopping, and community."></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[
            { title: "Pet Adoption", desc: "Find loving homes for pets from trusted owners & breeders.", icon: <FaDog size={40} className="text-[#777C6D] mb-4" /> },
            { title: "Pet Products", desc: "Shop food, toys, and accessories from verified sellers.", icon: <FaShoppingCart size={40} className="text-[#777C6D] mb-4" /> },
            { title: "Community Driven", desc: "Connect directly with sellers and adopters." , icon: <FaUsers size={40} className="text-[#777C6D] mb-4" />}
          ].map((item, i) => (
            <div data-aos="fade-up" key={i} className="p-6 bg-white dark:bg-black border-2  rounded-xl shadow text-center">
              <span className="flex justify-center">{item.icon}</span>
              <h3 className="text-xl font-semibold text-[#777C6D]">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighLights;
