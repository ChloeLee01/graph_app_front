import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import geoJson from "../../constants/world-50m.v1.json";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesMap, fetchTopProducts } from "../../redux/slices/apiSlice";

const SalesMap = () => {
  const state = useSelector((state) => state.apis.salesMapData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesMap());
  }, [dispatch]);

  // console.log(state);

  const findByCountryID = (countryId) => {
    const matchedCountry = state?.find(
      (country) => country.country_id === countryId
    );
    return matchedCountry ? matchedCountry.fill_color : "#ececec";
  };
  return (
    <div className="block-wrap lg:my-[14px] lg:ml-[14px] sm:w-[calc(50%-7px)] lg:w-auto w-full">
      <HeadTitle title="Sales Mapping by Country" />
      <div className="map-chart">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 200,
          }}
        >
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                if (geo.id !== "010") {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={findByCountryID(geo.id)}
                    />
                  );
                } else {
                  return null;
                }
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default SalesMap;
