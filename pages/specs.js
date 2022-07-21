import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/footer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Specs() {
  const { data, error } = useSWR("/specs.json", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>NOZE</title>
        <link
          rel="icon"
          type="image/svg"
          href="https://getnoze.com/wp-content/themes/noze/noze/assets/img/favicon.svg"
        />
      </Head>
      <div
        style={{ backgroundColor: "#000000" }}
        className="h-screen w-full flex items-center justify-center"
      >
        <Image src="/images/specs.png" alt="Noze" width="640" height="468" />
      </div>
      <div className="px-10 pt-16 pb-28 flex items-start gap-24">
        <div>
          <h1 className="pb-12 text-5xl text-slate-900 font-bold text-center">
            Specifications
          </h1>
        </div>
        <div className="w-full">
          {data.map((spec, key) => (
            <div
              key={spec.id}
              className="collapse border border-purple-400 bg-base-100 rounded-3xl hover:shadow-xl hover:border-purple-900 mb-5"
            >
              <input type="checkbox" />
              <div className="collapse-title flex justify-between items-center text-xl px-8 py-5">
                <span className="font-bold text-purple-900">{spec.title}</span>
                <FontAwesomeIcon
                  className="text-purple-200 text-4xl"
                  icon={faPlus}
                />
              </div>
              <div className="collapse-content px-8">
                <div className="pb-2">
                  <p className="text-lg text-gray-500">{spec.specOne}</p>
                  <p className="text-lg text-gray-500">{spec.specTwo}</p>
                  <p className="text-lg text-gray-500">{spec.specThree}</p>
                  <p className="text-lg text-gray-500">{spec.specFour}</p>
                  <p className="text-lg text-gray-500">{spec.specFive}</p>
                  <p className="text-lg text-gray-500">{spec.specSix}</p>
                  <p className="text-lg text-gray-500">{spec.specSeven}</p>
                  <p className="text-lg text-gray-500">{spec.specEight}</p>
                  <p className="text-lg text-gray-500">{spec.specNine}</p>
                  <p className="text-lg text-gray-500">{spec.specTen}</p>
                  <p className="text-lg text-gray-500">{spec.specEleven}</p>
                  <p className="text-lg text-gray-500">{spec.specTwelve}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
