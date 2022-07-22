import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    // console.log("scroll_inView", inView);
    if (inView) {
      animation.start({
        y: 8,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        y: 500,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <div
        className="max-w-screen-xl mt-16 pt-2 px-6 grid 
    grid-cols-1 
    md:grid-cols-1 
    xl:grid-cols-2 
    lg:grid-cols-2
    items-center
    md:px-16 
    lg:px-16 
    xl:px-16 
    mx-auto"
      >
        <div className="w-full">
          <h1 className="pt-8 xl:pt-0 lg:pt-0 text-5xl text-slate-900 font-bold text-center sm:text-left">
            There’s something <br /> new in the air
          </h1>
          <p className="pb-6 pt-4 xl:pt-12 lg:pt-12 xl:pb-12 lg:pb-12 text-lg text-gray-600 text-center sm:text-left">
            NOZE is an AI powered air quality monitor that works to <br /> keep
            you safe. Breathe easy.
          </p>
          {/* Modal  */}
          <div>
            <label
              htmlFor="my-modal-3"
              className="w-1/4 bg-purple-700 hover:bg-purple-800 duration-300 text-white text-sm py-3 px-4 rounded-md hidden lg:flex justify-center border-0 modal-button cursor-pointer"
            >
              <span>Join the waitlist</span>
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="text-slate-900 font-bold cursor-pointer absolute right-6 top-4"
                >
                  ✕
                </label>
                <h1 className="pt-10 text-4xl text-slate-900 font-black text-center">
                  Be the first to know
                </h1>
                <p className="pb-6 pt-8 text-gray-600 text-center">
                  Leave us your details and we’ll keep you <br /> up to date
                  about NOZE.
                </p>
                {/* form  */}
                <form className="w-full max-w-lg">
                  <div className="flex flex-col items-center">
                    <input
                      className="w-2/4 block text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 mb-2 text-sm"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                    <input
                      className="w-2/4 block text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 mb-2 text-sm"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <select
                      name="form_fields[Country]"
                      id="form-field-Country"
                      className="w-2/4 block text-gray-700 border border-gray-300 rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 mb-2 text-sm"
                      required="required"
                      aria-required="true"
                    >
                      <option value="">Select Country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antigua &amp; Barbuda">
                        Antigua &amp; Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia &amp; Herzegovina">
                        Bosnia &amp; Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="China - Hong Kong / Macau">
                        China - Hong Kong / Macau
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, Democratic Republic of (DRC)">
                        Congo, Democratic Republic of (DRC)
                      </option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia, Republic of The">
                        Gambia, Republic of The
                      </option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Great Britain">Great Britain</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Israel and the Occupied Territories">
                        Israel and the Occupied Territories
                      </option>
                      <option value="Italy">Italy</option>
                      <option value="Ivory Coast (Cote d'Ivoire)">
                        Ivory Coast (Cote d’Ivoire)
                      </option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Korea, Democratic Republic of (North Korea)">
                        Korea, Democratic Republic of (North Korea)
                      </option>
                      <option value="Korea, Republic of (South Korea)">
                        Korea, Republic of (South Korea)
                      </option>
                      <option value="Kosovo">Kosovo</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyz Republic (Kyrgyzstan)">
                        Kyrgyz Republic (Kyrgyzstan)
                      </option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar/Burma">Myanmar/Burma</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="North Macedonia, Republic of">
                        North Macedonia, Republic of
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pacific Islands">Pacific Islands</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovak Republic (Slovakia)">
                        Slovak Republic (Slovakia)
                      </option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor Leste">Timor Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Trinidad &amp; Tobago">
                        Trinidad &amp; Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks &amp; Caicos Islands">
                        Turks &amp; Caicos Islands
                      </option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United States of America (USA)">
                        United States of America (USA)
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Virgin Islands (UK)">
                        Virgin Islands (UK)
                      </option>
                      <option value="Virgin Islands (US)">
                        Virgin Islands (US)
                      </option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>{" "}
                    </select>
                    <button
                      type="submit"
                      className="bg-purple-700 w-2/4 hover:bg-purple-800 duration-300 text-white text-sm py-3 px-4 rounded-md mt-5 mb-12"
                    >
                      Sign Me Up!
                    </button>
                  </div>
                </form>
                {/* form  */}
              </div>
            </div>
          </div>
          {/* Modal  */}
        </div>
        {/* Banner  */}
        <div ref={ref} className="flex justify-start overflow-hidden">
          <motion.div
            animate={animation}
            className="bg-white mt-0 lg:mt-8 xl:mt-8 lg:px-0 xl:px-0 md:px-24"
          >
            <Image
              src="/images/NOZE_Device.png"
              alt="Noze"
              width="460"
              height="540"
              priority
            />
          </motion.div>
        </div>
        
      </div>
    </>
  );
}
