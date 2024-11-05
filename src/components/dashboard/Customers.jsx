import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../redux/slices/apiSlice";
import HeadTitle from "./HeadTitle";
import {
  AreaChart,
  Area,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PropTypes } from "prop-types";

const CustomTooltip = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label  text-gray-500 text-sm">
        {payload[0].payload?.month}
      </p>

      <ul className="recharts-tooltip-item-list">
        {payload?.map((item, index) => {
          return (
            <li key={index}>
              {item.name}/{item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CustomTooltip.propTypes = {
  payload: PropTypes.any,
};

const Customers = () => {
  const state = useSelector((state) => state.apis.customersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  // console.log(state);

  const formatLegendValue = (value, name) => {
    // console.log(value, name);
    const initialValue = 0;
    const totalValue = state?.reduce((acc, cur) => {
      if (Object.keys(cur).includes(name.dataKey)) {
        // name.dataKey가 cur 객체의 key에 포함 괴어 있는지 확인
        return acc + cur[name.dataKey]; // 포함되어 있다면 acc에 누적해서 더함
      } else {
        return acc;
      }
    }, initialValue); //초기값 지정

    return (
      <span className="custom-legend-item-text-group">
        <span className="custom-legend-item-text">
          {value.replace("_", " ")}
        </span>
        <span className="custom-legend-item-text">{" " + totalValue}</span>
      </span>
    );
  };

  return (
    <div className="customer-chart block-wrap mt-[14px] ml-[14px]">
      <HeadTitle title="Customers Satisfaction" />
      <div className="area-chart w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={state}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Legend formatter={formatLegendValue} />
            <Tooltip content={<CustomTooltip />} />

            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0095ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07e098" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#07e098" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="last_month"
              stroke="#0095ff"
              fill="url(#colorUv)"
              fillOpacity={1}
              strokeWidth={2}
              dot={{
                stroke: "#0095ff",
                fill: "0095ff",
              }}
            />
            <Area
              type="monotone"
              dataKey="this_month"
              stroke="#07e098"
              fill="url(#colorPv)"
              fillOpacity={1}
              strokeWidth={2}
              dot={{
                stroke: "#07e098",
                fill: "#07e098",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Customers;
