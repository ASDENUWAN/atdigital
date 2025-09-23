import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Answer text here...",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Another answer text here...",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle open/close
  };

  return (
    <section className="container py-5">
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "var(--primary-color)" }}
      >
        Frequently Asked Questions
      </h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-bottom py-3">
            <button
              className="w-100 d-flex justify-content-between align-items-center border-0 bg-white fw-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="fs-4">{openIndex === index ? "–" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="mt-2 text-muted">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
