import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dataChart } from "./chartData";

const Charts = () => {
  return (
    <div className=" lg:basis-[75%] p-4 border-r border-slate-300">
      {/* HEADER */}
      <h3 className="font-bold">Today's Trends</h3>
      <div className="top-content mt-4 lg:flex lg:justify-between lg:items-center">
        <p className="text-slate-400 text-xs">as of 25 May 2022, 09:41 PM</p>
        <div className="flex mt-2 md:mt-0 justify-end lg:justify-between gap-6 ">
          <span className="flex justify-center items-center gap-2">
            <span className="w-[1.5rem] h-[3px] bg-primmary_blue rounded-md"></span>
            <p className="text-xs font-semibold text-primmary_blue">Today</p>
          </span>
          <span className="flex justify-center items-center gap-2">
            <span className="w-[1.5rem] h-[3px] bg-slate-400 rounded-md"></span>
            <p className="text-xs font-semibold text-slate-400">Yesterday</p>
          </span>
        </div>
      </div>
      {/* CHARTS-COMPONENT */}
      <ResponsiveContainer width={"100%"} height="80%" className="mt-4">
        <AreaChart
          width={730}
          height={250}
          data={dataChart}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#94A3B8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3750FA" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3750FA" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis orientation="right" />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#94A3B8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#3750FA"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
