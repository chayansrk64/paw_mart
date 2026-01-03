const HighLights = () => {
  return (
    <section className="max-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Why PawMart?</h2>
        <p className="mt-3 text-gray-600">
          Everything pet lovers need — adoption, shopping, and community.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Pet Adoption", desc: "Find loving homes for pets from trusted owners & breeders." },
            { title: "Pet Products", desc: "Shop food, toys, and accessories from verified sellers." },
            { title: "Community Driven", desc: "Connect directly with sellers and adopters." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighLights;
