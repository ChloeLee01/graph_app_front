import React, { useEffect, useState } from "react";
import { COUNTRIES_API_URL } from "../../constants/apiUrl";
import { Icons } from "../../assets/icons";
import axios from "axios";

const AppbarLang = () => {
  const DEFAULT_COUNTRY = "South Korea";
  const [countries, setCountries] = useState([]);
  const [isDropListOpen, setIsDropListOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleDropListEnable = () => setIsDropListOpen(!isDropListOpen);
  const countrySectedHandler = (country, flag, lang) => {
    setSelectedCountry({country, flag, lang});
    setIsDropListOpen(false);
  }

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await axios.get(COUNTRIES_API_URL);

        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);

        const defaultCountry = sortedCountries.find(
          (country) => country.name.common === DEFAULT_COUNTRY
        );

        if (defaultCountry) {
          let langKey = Object.keys(defaultCountry?.languages)[0];
          setSelectedCountry({
            country: defaultCountry.name.common,
            flag: defaultCountry.flags.png,
            lang: langKey,
          });
        }

        // console.log(defaultCountry);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchCountriesData();
  }, []);

  // console.log(selectedCountry);
  return (
    <div className="appbar-dropdown lang-dropdown w-30 h-10 relative">
      <div
        className="drop-selected w-full h-full px-1 py-3 flex items-center gap-3 cursor-pointer "
        onClick={handleDropListEnable}
      >
        <div className="drop-selected img w-6 h-6 overflow-hidden rounded-full">
          <img
            src={selectedCountry?.flag}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="drop-selected-text flex items-center gap-2">
          <span className="uppercase">{selectedCountry?.lang}</span>
          <img
            src={Icons.ChevronDownDark}
            alt=""
            className="dark:invert-[1] brightness-[100%]"
          />
        </div>
      </div>

      {/* Drop Down Countries */}
      <div
        className={`drop-list absolute top-full w-full left-0 py-2 px-0 dark:bg-gray-950 dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] bg-white shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] text-gray-950 rounded-sm transition ease-in-out delay-300 z-10 ${
          isDropListOpen ? "" : "hidden"
        }`}
      >
        <div className="drop-list-wrapper scrollbar max-h-52 overflow-y-scroll py-[6px] px-3">
          {countries?.length > 0 ? (
            countries?.map((country) => {
              if (country?.languages && Object.keys(country?.languages)) {
                const langKey = Object.keys(country?.languages)[0];

                return (
                  <div
                    key={country.name.common}
                    className="drop-item flex items-center gap-3 hover:bg-slate-100 py-1 px-0 transition ease-in-out delay-100 hover:dark:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      countrySectedHandler(
                        country?.name?.common,
                        country?.flags?.png,
                        langKey
                      );
                    }}
                  >
                    <span className="drop-item-img w-4 h-4 overflow-hidden rounded-full">
                      <img
                        src={country?.flags?.png}
                        alt={country?.flags?.alt}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="drop-item-text text-sm uppercase font-medium text-gray-950 dark:text-white">
                      {langKey}
                    </span>
                  </div>
                );
              } else {
                return null;
              }
            })
          ) : (
            <p>No Data Listed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppbarLang;
