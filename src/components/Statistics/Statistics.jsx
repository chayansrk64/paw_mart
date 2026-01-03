import SectionTitle from "../SectionTitle/SectionTitle";

const Statistics = () => {
  return (
    <section className="max-h-screen py-20 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle title="Statistics" subtitle="This shows how we are growing over the years"> </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {[
            { value: "5K+", label: "Pets Adopted" },
            { value: "2K+", label: "Active Sellers" },
            { value: "10K+", label: "Happy Users" },
            { value: "1K+", label: "Products Listed" }
          ].map((stat, i) => (
            <div key={i}>
                <div className="bg-[#B7B89F] py-12 rounded-xl">
                     <h3 className="text-4xl font-bold">{stat.value}</h3>
                    <p className="mt-2">{stat.label}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
