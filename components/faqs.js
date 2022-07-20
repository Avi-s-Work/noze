import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

/* export const getStaticProps = async () => {
  const res = await fetch("/faqs.json");
  const data = await res.json;
  return {
    props: {
      faqs: data,
    },
  };
}; */

export default function Faqs({ faqs }) {
  const { data, error } = useSWR("/faqs.json", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="px-24 py-16">
        <h1 className="pb-12 text-5xl text-slate-900 font-bold text-center">
          FAQs
        </h1>
        {data.map((faq, key) => (
          <div
            key={faq.id}
            className="collapse border border-purple-400 bg-base-100 rounded-3xl hover:shadow-xl hover:border-purple-900 mb-6"
          >
            <input type="checkbox" />
            <div className="collapse-title flex justify-between items-center text-xl px-8 py-6">
              <span className="font-bold text-purple-900">{faq.question}</span>
              <FontAwesomeIcon
                className="text-purple-200 text-4xl"
                icon={faPlus}
              />
            </div>
            <div className="collapse-content px-8">
              <p className="pt-4 pb-2 text-lg text-gray-500">{faq.answer}</p>
              {faq.note ? (
                <p className="pt-6 pb-2 text-lg text-gray-500">{faq.note}</p>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
