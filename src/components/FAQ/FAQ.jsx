import SectionTitle from "../SectionTitle/SectionTitle";

const faqs = [
  {
    id: 1,
    question: "Is PawMart free to use?",
    answer:
      "Yes, PawMart is completely free for browsing, adopting pets, and connecting with sellers. Some sellers may charge for products or adoption-related expenses.",
  },
  {
    id: 2,
    question: "How can I list a pet or product on PawMart?",
    answer:
      "You can easily list a pet or product by creating an account, going to your dashboard, and filling out the listing form with the required details.",
  },
  {
    id: 3,
    question: "Are the sellers and breeders verified?",
    answer:
      "PawMart encourages responsible listings and reviews user profiles regularly. While we promote verified sellers, users should always communicate and verify details before making decisions.",
  },
  {
    id: 4,
    question: "How do I contact a pet owner or seller?",
    answer:
      "Each listing includes direct contact options, allowing you to message or call the owner or seller to ask questions and arrange adoption or purchase safely.",
  },
];


const FAQ = () => {
  return (
    <section className="max-h-screen py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Frequently Asked Questions" subtitle=" Everything you need to know about PawMart."></SectionTitle>
        

        <div className="mt-10 space-y-4">
          {faqs.map((q) => (
           <div data-aos="fade-up" tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">{q.question}</div>
  <div className="collapse-content text-sm">
   {q.answer}
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
