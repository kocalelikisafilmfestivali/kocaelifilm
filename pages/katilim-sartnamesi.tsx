import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "Madde 1",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "Madde 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "Madde 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "Madde 4",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function Terms() {
  return (
    <div className="py-10 bg-white sm:py-20 box">
      <div className="text-left">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Katılım Şartnamesi
        </h2>
        <p className="mt-4 text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          possimus.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="font-semibold text-left text-black">
                {faq.question}
              </dt>
              <dd className="mt-3 text-left text-slate-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
