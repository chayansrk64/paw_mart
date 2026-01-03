import React from "react"
import SectionTitle from "../SectionTitle/SectionTitle";
 

const heroes = [
  {
    id: 1,
    name: "Ariana Sultana",
    role: "Rescued Bella the Labrador",
    image: "https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw=",
    story:
      "Ariana adopted Bella after she was found abandoned. Now they share morning runs and endless cuddles.",
  },
  {
    id: 2,
    name: "Nayem Rahman",
    role: "Fostered 12 Street Cats",
    image: "https://media.istockphoto.com/id/517696693/photo/pitbull-kiss.jpg?s=612x612&w=0&k=20&c=DRtgG-l2ZT6U6G5LPbFbcpqBN21di3KPVtlQf1RE66Q=",
    story:
      "Nayem opened his heart and home to stray cats, ensuring they find love, safety, and a permanent home.",
  },
  {
    id: 3,
    name: "Sadia Akter",
    role: "Volunteer Caregiver",
    image: "https://img.freepik.com/free-photo/woman-with-chihuahua-dog_52683-110311.jpg?semt=ais_hybrid&w=740&q=80",
    story:
      "Sadia helps groom and feed rescued dogs every weekend — spreading compassion one paw at a time.",
  },
  {
    id: 4,
    name: "Rafiul Hasan",
    role: "Adopted Max the German Shepherd",
    image: "https://www.liveincostarica.com/wp-content/uploads/pet-culture-costa-rica-1024x682.jpg",
    story:
      "Rafiul gave Max a new beginning after a tough past — they’re now inseparable best friends.",
  },
];

const PetHeroes = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <SectionTitle title="About PawMart." subtitle=" These amazing humans chose adoption and rescue — "> </SectionTitle>
      <div  className=" ">
      
      {/* Cards Grid */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {heroes.map((hero) => (
          <div
          data-aos="fade-up"
            key={hero.id}
            className="bg-white dark:bg-black  rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-60 object-cover hover:scale-105 transition"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {hero.name}
              </h3>
              <p className="text-[#2f3028] dark:text-white text-sm font-medium mb-3">
                {hero.role}
              </p>
              <p className="text-gray-600 dark:text-white text-sm">{hero.story}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default PetHeroes;
