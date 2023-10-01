const TopOverview = () => {
  return (
    <div className="grid grid-flow-row gap-6 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="flex flex-col justify-center items-center border-2 border-slate-200 rounded-md bg-white p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group">
        <p className="font-bold text-slate-400 group-hover:text-primmary_blue ">
          Unresolved
        </p>
        <h4 className="font-bold text-4xl mt-4 ">60</h4>
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-slate-200 rounded-md bg-white p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group">
        <p className="font-bold  text-slate-400 group-hover:text-primmary_blue">
          Overdue
        </p>
        <h4 className="font-bold text-4xl mt-4 ">16</h4>
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-slate-200 rounded-md bg-white p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group">
        <p className="font-bold text-slate-400 group-hover:text-primmary_blue ">
          Open
        </p>
        <h4 className="font-bold text-4xl mt-4 ">43</h4>
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-slate-200 rounded-md bg-white p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group">
        <p className="font-bold text-slate-400 group-hover:text-primmary_blue ">
          On Hold
        </p>
        <h4 className="font-bold text-4xl mt-4 ">64</h4>
      </div>
    </div>
  );
};

export default TopOverview;
