import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function Faqs() {
  return (
    <>
      <div className="px-24 py-16">
        <h1 className="pb-12 text-5xl text-slate-900 font-bold text-center">
          FAQs
        </h1>
        <div className="collapse border border-purple-400 bg-base-100 rounded-3xl hover:shadow-xl hover:border-purple-900">
          <input type="checkbox" />
          <div className="collapse-title flex justify-between items-center text-xl px-8 py-6">
            <span className="font-bold text-purple-900">
              How is NOZE different from other air quality monitors?
            </span>
            <FontAwesomeIcon
              className="text-purple-200 text-4xl"
              icon={faPlus}
            />
          </div>
          <div className="collapse-content px-8">
            <p className="pt-4 pb-2 text-lg text-gray-500">
              The technology behind NOZE is based on a digital nose sensor (also
              known as an e-nose). With this sensor, NOZE can precisely detect a
              wide range of pollutants and chemicals. In contrast, almost all
              other air quality monitors on the market today use a bundle of
              off-the-shelf sensors that are limited in what they can detect and
              can vary widely in quality, accuracy and reliability.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
