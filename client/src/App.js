import React, { useEffect, useState } from "react";
import {
  Validation,
  validateFullName,
  validateMessage,
  validatePhone,
} from "./components/Validation";
import InlineError from "./components/InlineError";
import { getContries, ipAddress } from "./api/api";
import Loading from "./components/Loading";

const InputClass =
  "w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-border rounded-md";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState();
  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState();
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState("Vietnam");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();

  let listCountries =
    countries && Object.keys(countries).map((key) => countries[key]);
  let countriesCurrent =
    listCountries && listCountries.find((val) => val.country_name === country);

  useEffect(() => {
    if (!ipData && !countries) {
      ipAddress({ setLoading, setIpData });
      getContries({ setLoading, setCountries });
    }
    // Validation
    validateFullName({ fullName, setFullNameError });
    Validation({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });
  }, [fullName, email, phone, message]);

  return (
    <div className="container flex-colo py-12 mx-auto min-h-screen sm:py-2 px-4">
      {loading ? (
        <Loading />
      ) : (
        <div className="main-box lg:w-3/4 w-full flex box-shadow rounded-lg overflow-hidden">
          <div className="box-1 bg-main flex-colo py-6 sm:py-0">
            <img
              src="/favicon.png"
              className="w-16 h-16 object-cover"
              alt="logo"
            />
            <h1 className="my-4 text-xl">ShoeShop</h1>
            <p className="italic text-sm">
              We detected you are <br /> current in
              <span className="font-bold"> ({ipData && ipData})</span>
            </p>
          </div>
          <form className="box-2 bg-white pt-12 pb-6 sm:px-12 px-6">
            <h2 className="sm:text-2xl text-xl text-center mb-12 font-semibold">
              Contact Us
            </h2>
            {/* Full Name */}
            <div className="my-6">
              <label>FullName</label>
              <input
                required
                type="text"
                placeholder="User Doe"
                className={InputClass}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {fullNameError && <InlineError error={fullNameError} />}
            </div>
            {/* Email */}
            <div className="my-6">
              <label>Email</label>
              <input
                required
                type="email"
                placeholder="example@gmail.com"
                className={InputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && <InlineError error={emailError} />}
            </div>
            {/* Phone */}
            <div className="my-6">
              <label>Phone</label>
              <div className="grid gap-3 grid-cols-12 border-2 mt-2 border-border rounded-md w-full px-2">
                <select
                  className="col-span-3 bg-main py-3 px-2 my-2 text-sm rounded"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {listCountries &&
                    listCountries.map((val, idx) => (
                      <option value={val.country_name} key={idx}>
                        {val.country_name}
                      </option>
                    ))}
                </select>
                <div className="tracking-widest col-span-2 border-x-2 border-border flex-colo">
                  {countriesCurrent && countriesCurrent.dialling_code}
                </div>
                <input
                  required
                  type="number"
                  placeholder="0987654321"
                  className="placeholder:text-gray text-main col-span-7 px-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {phone && <InlineError error={phoneError} />}
            </div>
            {/* Message */}
            <div className="my-6">
              <label>Message</label>
              <textarea
                required
                placeholder="How can help you"
                rows={3}
                className="mt-2 w-full border-2 border-border py-4 placeholder:text-gray px-6 text-main rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {message && <InlineError error={messageError} />}
            </div>
            {/* Button */}
            <button
              type="submit"
              className="w-full border-2 border-main hover:bg-white trans bg-main mt-6 rounded-md tracking-widest py-4 font-subMain font-bold"
            >
              Submit
            </button>
            {/* Social Media */}
            <div className="w-full mt-6 flex-rows">
              <a href="https://medium.com/@irenemmassyy" target="_black">
                <i className="fab fa-medium-m social" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w"
                target="_black"
              >
                <i className="fab fa-youtube text-red-500 social" />
              </a>
              <a href="https://t.me/zpunet" target="_black">
                <i className="fab fa-telegram text-blue-400 social" />
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
