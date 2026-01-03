const CTA = () => {
  return (
    <section className="max-h-screen py-20 px-6 bg-black text-white flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Join PawMart Today</h2>
        <p className="mt-3 text-gray-300">
          Adopt pets, sell products, and grow with the community.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-primary rounded">
            Get Started
          </button>
          <button className="px-6 py-3 border rounded">
            Browse Pets
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
